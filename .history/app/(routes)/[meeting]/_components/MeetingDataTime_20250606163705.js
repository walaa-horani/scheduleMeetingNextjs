"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import { CalendarCheck, Clock, MapIcon, TimerIcon } from 'lucide-react'
import { format } from 'date-fns'
import DateTimeComponent from './DateTimeComponent'
import UserForm from './UserForm'
import { getFirestore ,doc, setDoc } from "firebase/firestore";
import { app } from '../../dashboard/confing/FirebaseConfing'
import { toast } from 'sonner'

function MeetingDataTime({eventInfo,meetingInfo}) {

const [date,setDate]= useState(new Date())
  const[timeSlotes,setTimeSlots] = useState()
  const [enabletimeSlotes,setEnabletimeSlotes] = useState(false)

  const [selectedTime,setSelectedTime] = useState()
  const[step,setStep] = useState(1)

  const [note,setNote] = useState()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const db = getFirestore(app);

  useEffect(()=>{
    eventInfo?.duration&&createTimeSlot(eventInfo?.duration)

  },[eventInfo])

   const createTimeSlot=(interval)=>{
        const startTime = 8 * 60; // 8 AM in minutes
        const endTime = 22 * 60; // 10 PM in minutes
        const totalSlots = (endTime - startTime) / interval;
        const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? 'PM' : 'AM';
      return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    });
 
    setTimeSlots(slots); 
    console.log(slots)
    }

    const handleDate=(date)=>{
        setDate(date)
        const dateFormat = format(date,"EEEE").toLowerCase()
        console.log("dateFormat",dateFormat)
        if(meetingInfo?.daysAvailable?.[dateFormat]){
          setEnabletimeSlotes(true)
        }
        else{
          setEnabletimeSlotes(false)
        }
    }

    const handleScheduledMeeting= async()=>{
        await setDoc(doc(db, "ScheduledMeeting", String(Date.now())), {
            meetingName:meetingInfo.meetingName,
            meetingEmail:meetingInfo.email,
            selectedTime:selectedTime,
            selectedDate:date,
            formatedDate:format(date,"PPP"),
            formatedTime:format(date,"t"),
            duration:eventInfo.duration,
            name:name,
            email:email,
            note:note
            
}).then(resp=>{
  toast("Meeting Scheduled Successfully")
})
;
    }
  return (
    
       <div className='p-7 shadow-md   m-5 border-t-cyan-800 mx-10 md:mx-26 lg:mx-55 mt-20 ' >
          <Image width={150} height={150} src="/logo.png"/>
       

         <div className='grid grid-cols-1 md:grid-cols-3'>
          
         <div className="mt-7 border-r border-[#bcbcbc] pr-4">

  {/* Meeting Name */}
  <div className="mt-5">
    <h2 className="font-bold text-[28px]">{meetingInfo?.meetingName}</h2>
    <p className="text-gray-600 ml-[2px]">
      {eventInfo?.meetingName || "Enter Meeting Name"}
    </p>
  </div>

  {/* Second repeated name block (يمكنك حذفه إن لم يكن ضروريًا) */}
  <div className="mt-5">
    <h2 className="font-bold text-[28px]">{meetingInfo?.meetingName}</h2>
    <p className="text-gray-600 ml-[2px]"></p>
  </div>

  {/* Duration */}
  <div className="mt-5">
    <div className="flex items-start gap-2">
      <Clock className="text-[#039b95] mt-1" />
      <div>
        <h2 className="font-bold text-[20px]">Duration</h2>
        <p className="text-gray-600">
          {eventInfo?.duration || "duration"} Min
        </p>
      </div>
    </div>
  </div>

  {/* Program */}
  <div className="mt-5">
    <div className="flex items-start gap-2">
      <MapIcon className="text-[#039b95] mt-1" />
      <div>
        <h2 className="font-bold text-[20px]">Program</h2>
        <p className="text-gray-600">
          {eventInfo?.program || "program"}
        </p>
      </div>
    </div>
  </div>

  {/* Date */}
  <div className="mt-5">
    <div className="flex items-start gap-2">
      <CalendarCheck className="text-[#039b95] mt-1" />
      <div>
        <h2 className="font-bold text-[20px]">Date</h2>
        <p className="text-gray-600">{format(date, "PPP")}</p>
      </div>
    </div>
  </div>

  {/* Time */}
  <div className="mt-5">
    <div className="flex items-start gap-2">
      <TimerIcon className="text-[#039b95] mt-1" />
      <div>
        <h2 className="font-bold text-[20px]">Time</h2>
        {selectedTime && (
          <p className="text-gray-600">{selectedTime}</p>
        )}
      </div>
    </div>
  </div>

</div>

        

        <div className="md:col-span-2 w-full ">

  { step==1? <DateTimeComponent selectedTime={selectedTime} setSelectedTime={setSelectedTime} enabletimeSlotes={enabletimeSlotes}date={date} handleDate={handleDate} timeSlotes={timeSlotes} />:<UserForm setName={setName} setEmail={setEmail} setNote={setNote}/> }
         
        </div>
        
         </div>

          <div className='mb-20 '>
          {step==2&&  <Button onClick={()=> setStep(1)} className="float-right px-10 text-white  hover:bg-[#047772] transition-all cursor-pointer">Back</Button>}
          {step==1? <Button disabled={!enabletimeSlotes} onClick={()=>setStep(step+1)} className="float-right px-10 mr-3 hover:bg-[#047772] transition-all text-white cursor-pointer">Next</Button>
          :

          <Button onClick={handleScheduledMeeting} disabled={! name || !email || !note }  className="float-right px-10 mr-3 hover:bg-[#047772] transition-all text-white cursor-pointer">Schedule</Button>
          } 
          </div>
         </div>





  )
}

   

  

export default MeetingDataTime
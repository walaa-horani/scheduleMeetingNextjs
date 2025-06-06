"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import { Clock, MapIcon } from 'lucide-react'

function MeetingDataTime({eventInfo}) {

const [date,setDate]= useState(new Date())
  const[timeSlotes,setTimeSlots] = useState()
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
  return (
    
       <div className='p-7 shadow-md   m-5'>
          <Image width={150} height={150} src="/logo.png"/>
       

         <div className='grid grid-cols-1 md:grid-cols-3'>
          
          <div className='mt-7  border-r border-[#bcbcbc]'>
             
             <div>

         <h2 className='font-bold text-[28px] mt-3'>Meeting Name</h2>
             <h2>{eventInfo?.meetingName?eventInfo?.meetingName:"Enter Meeting Name"}</h2>
           </div>


            <div  className='flex gap-3 items-center'>

         <h2 className='font-bold text-[28px] mt-3'><Clock/>  Duration</h2>
             <h2>{eventInfo?.duration?eventInfo?.duration:"duration"} Min</h2>
           </div>

            <div className='flex gap-3 items-center'>

         <h2 className='font-bold text-[28px] mt-3 '> <MapIcon/>  Program</h2>
             <h2>{eventInfo?.program?eventInfo?.program:"program"} </h2>
           </div>




          </div>

         
        <div className='md:col-span-2 flex p-3 mt-3'>
          <div className='flex flex-col'>

        
       {/* #039b95    */}
          <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-[#bcbcbc]"
            />
              </div>

              <div className=' h-72 flex flex-col p-4 overflow-auto gap-4 w-full '>
                {timeSlotes?.map((item)=>(
                 <Button variant="outline" className=" border-[#039b95] ">{item}</Button>
                ))}
              </div>
          </div>
         </div>
         </div>





  )
}

   

  

export default MeetingDataTime
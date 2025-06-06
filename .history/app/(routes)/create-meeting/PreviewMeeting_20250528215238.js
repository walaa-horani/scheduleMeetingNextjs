"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Calendar } from "@/components/ui/calendar"
import { Button } from 'react-day-picker'

function PreviewMeeting({formValue}) {

  const [date,setDate]= useState(new Date())
  const[timeSlotes,setTimeSlots] = useState()
  useEffect(()=>{
    formValue?.duration&&createTimeSlot(formValue?.duration)

  },[formValue])

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
             <h2>{formValue?.meetingName?formValue?.meetingName:"Enter Meeting Name"}</h2>
           </div>


            <div>

         <h2 className='font-bold text-[28px] mt-3'>Duration</h2>
             <h2>{formValue?.duration?formValue?.duration:"duration"}</h2>
           </div>




          </div>

         
        <div className='md:col-span-2 flex p-3 mt-3'>
          <div className='flex flex-col'>

        
          
          <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-[#bcbcbc]"
            />
              </div>

              <div>
                {timeSlotes?.map((item)=>(
                  <Button>{timeSlotes}</Button>
                ))}
              </div>
          </div>
         </div>
         </div>





































    //     <div className='p-7 shadow-md   m-5'>
//         <Image width={150} height={150} alt='logo' src="/logo.png"/>
   
      
      
//         {/* Meeting Info */}

//         <div className='grid grid-cols-1 md:grid-cols-3'>

        
//       <div className='mt-7  border-r border-[#bcbcbc]'>

//        <h2 className='font-bold text-[28px] text-[#039b95] '>Meeting Name</h2>
//        <h2 className='mt-6'>{formValue?.meetingName?formValue?.meetingName:"Meeting Name"}</h2>
        

//         <div className='flex items-center gap-2 mt-5'>
//             <Clock/> <h2> {formValue?.duration} Min</h2>
//         </div>

//         <div className='flex items-center gap-2 mt-5'>
//             <MapPin/> <h2> {formValue?.program} </h2>
//         </div>
         
//          <div className='mt-5'>

         
//         <Link  href={formValue?.programsURL?formValue?.programsURL:"#"}  className='text-blue-500 '>{formValue?.programsURL?formValue?.programsURL:"url"}</Link>
//          </div>
            
//     </div>
// </div>
//     <div>
//         {/* Time AND Date */}
//     </div>
   
//     </div>
  )
}

export default PreviewMeeting
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function UpcomingMeeting({meetingList}) {
  return (
    <div>

        {meetingList&&meetingList.map((item)=>(
              

            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{item?.formatedDate}</AccordionTrigger>
    <AccordionContent>
            
   <div className='mt-7  border-r border-[#bcbcbc]'>
                
                <div>
   
            <h2 className='font-bold text-[28px] mt-3'>  {meetingInfo?.meetingName}</h2>
                <h2>{eventInfo?.meetingName?eventInfo?.meetingName:"Enter Meeting Name"}</h2>
              </div>
   
   <div>
   
            <h2 className='font-bold text-[28px] mt-3'>  {meetingInfo?.meetingName}</h2>
                <h2>{}</h2>
              </div>
               <div>
   
            <h2 className='font-bold text-[28px] mt-3 flex items-center gap-3 mb-2'><Clock className='text-[#039b95]'/>  Duration</h2>
                <h2>{eventInfo?.duration?eventInfo?.duration:"duration"} Min</h2>
              </div>
   
               <div >
   
            <h2 className='font-bold text-[28px] mt-3  flex items-center gap-3 mb-2'> <MapIcon className='text-[#039b95]'/>  Program</h2>
                <h2>{eventInfo?.program?eventInfo?.program:"program"} </h2>
                      
              </div>
   
   
                 <div >
   
            <h2 className='font-bold text-[28px] mt-3  flex items-center gap-3 mb-2'> <CalendarCheck className='text-[#039b95]'/>  Date </h2>
                <h2>{format(date,"PPP")} </h2>
                      
              </div>
   
              
                 <div >
   
            <h2 className='font-bold text-[28px] mt-3  flex items-center gap-3 mb-2'> <TimerIcon className='text-[#039b95]'/> Time</h2>
              {selectedTime&&  <h2>{selectedTime} </h2>}
                      
              </div>
   
   
   
   
   
   
   
             </div>         
    </AccordionContent>
  </AccordionItem>

</Accordion>

        ))}
   
    </div>
  )
}

export default UpcomingMeeting
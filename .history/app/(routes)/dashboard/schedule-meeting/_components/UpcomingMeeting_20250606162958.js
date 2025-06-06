import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendarCheck, Clock, MapIcon, TimerIcon } from 'lucide-react'

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
   
            <h2 className='font-bold text-[28px] mt-3'>  {item?.meetingName}</h2>
                <h2>{item?.meetingName?item?.meetingName:"Enter Meeting Name"}</h2>
              </div>
   
   
               <div className='flex flex-col'>
   
            <h2 className='font-bold text-[28px] mt-3 flex  gap-3 mb-2'><Clock className='text-[#039b95]'/>  Duration<br/>
            <p> {item?.duration?item?.duration:"duration"} Min</p>  </h2>
              </div>
   
               <div >
   
            <h2 className='font-bold text-[28px] mt-3  flex items-center gap-3 mb-2'> <MapIcon className='text-[#039b95]'/>  Program</h2>
                <h2>{item?.program?item?.program:"program"} </h2>
                      
              </div>
   
   
                 <div >
   
            <h2 className='font-bold text-[28px] mt-3  flex items-center gap-3 mb-2'> <CalendarCheck className='text-[#039b95]'/>  Date </h2>
                <h2>{item?.formatedDate} </h2>
                      
              </div>
   
              
                 <div >
   
         
            
                      
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
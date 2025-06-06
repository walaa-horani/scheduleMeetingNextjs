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
      <div className="mt-7 border-r border-[#bcbcbc] pr-4">

        {/* Meeting Name */}
        <div className="mt-3">
          <h2 className="font-bold text-[28px]">{item?.meetingName}</h2>
          <p className="text-gray-600">{item?.meetingName || "Enter Meeting Name"}</p>
        </div>

        {/* Duration */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="text-[#039b95]" />
            <h2 className="font-bold text-[20px]">Duration</h2>
          </div>
          <p className="text-gray-600 ml-7">{item?.duration || "duration"} Min</p>
        </div>

        {/* Program */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-1">
            <MapIcon className="text-[#039b95]" />
            <h2 className="font-bold text-[20px]">Program</h2>
          </div>
          <p className="text-gray-600 ml-7">{item?.program || "program"}</p>
        </div>

        {/* Date */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-1">
            <CalendarCheck className="text-[#039b95]" />
            <h2 className="font-bold text-[20px]">Date</h2>
          </div>
          <p className="text-gray-600 ml-7">{item?.formatedDate}</p>
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
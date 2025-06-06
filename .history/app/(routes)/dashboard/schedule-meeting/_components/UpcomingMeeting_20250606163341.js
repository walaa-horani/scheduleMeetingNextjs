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
          <h2 className="font-bold text-[28px]">Meeting Name</h2>
          <p className="ml-[32px] text-gray-600">{item?.meetingName || "Enter Meeting Name"}</p>
        </div>

        {/* Duration */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <Clock className="text-[#039b95]" />
            <div>
              <h2 className="font-bold text-[20px]">Duration</h2>
              <p className="text-gray-600">{item?.duration || "duration"} Min</p>
            </div>
          </div>
        </div>

        {/* Program */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <MapIcon className="text-[#039b95]" />
            <div>
              <h2 className="font-bold text-[20px]">Program</h2>
              <p className="text-gray-600">{item?.program || "program"}</p>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <CalendarCheck className="text-[#039b95]" />
            <div>
              <h2 className="font-bold text-[20px]">Date</h2>
              <p className="text-gray-600">{item?.formatedDate}</p>
            </div>
          </div>
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
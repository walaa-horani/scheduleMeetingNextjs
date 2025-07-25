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
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

</Accordion>

        ))}
   
    </div>
  )
}

export default UpcomingMeeting
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpcomingMeeting from './_components/UpcomingMeeting'
function ScheduledMeeting() {
  return (
    <div className='p-10'>
        <h1 className='text-[24px] font-bold p-3'>Scheduled Meeting List</h1>
        <hr className='text-slate-400 p-2'/>

        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
    <TabsTrigger value="Past">Past</TabsTrigger>
  </TabsList>
  <TabsContent value="Upcoming">
    <UpcomingMeeting/>
    </TabsContent>
  <TabsContent value="Past">Change your password here.</TabsContent>
</Tabs>

    </div>
  )
}

export default ScheduledMeeting
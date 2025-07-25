import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function ScheduledMeeting() {
  return (
    <div className='p-10'>
        <h1 className='text-[24px] font-bold p-3'>Scheduled Meeting List</h1>
        <hr className='text-slate-400 p-2'/>

        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>
  )
}

export default ScheduledMeeting
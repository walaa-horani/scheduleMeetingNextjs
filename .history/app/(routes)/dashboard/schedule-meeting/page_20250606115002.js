"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpcomingMeeting from './_components/UpcomingMeeting'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../confing/FirebaseConfing';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
function ScheduledMeeting() {
  const db = getFirestore(app);
  const {user} = useKindeBrowserClient()
    const upcomingMeeting=async()=>{
        const q = query(collection(db, "ScheduledMeeting"), where("meetingEmail", user?.email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
});
    }
  
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
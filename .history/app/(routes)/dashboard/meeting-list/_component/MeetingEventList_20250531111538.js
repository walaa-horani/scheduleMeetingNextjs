"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../confing/FirebaseConfing';
import { Clock, MapPin } from 'lucide-react';

function MeetingEventList() {

     const db = getFirestore(app);
  const {user} = useKindeBrowserClient()

    const [eventList,setEventList] = useState([])
  useEffect(()=>{
    user&&getEventList()
  },[user])
  const getEventList= async()=>{
      const q = query(collection(db, "Event"), where("createdBy", "==", user?.email));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setEventList(prevEvent=>[...prevEvent,doc.data()])
});
  }
  return (
    <div className='mt-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>

       {eventList.length>0?eventList?.map((event)=>(
            <div className='border shadow-md border-t-8 border-[#FEBF30] p-5'>
           <h2 className='font-bold text-2xl rounded-lg'>{event.meetingName}</h2>

           <div className='flex justify-between items-cen'>   
           <h2 className='flex gap-2'><Clock/> {event.duration} Min</h2>

            <h2 className='flex gap-2 mt-3'><MapPin/> {event.program} </h2>
           </div>  
           
            </div>

       ))
        :<h2>No Events Yet</h2>
    }

   

    </div>
  )
}

export default MeetingEventList
"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, query, where,doc, deleteDoc, getDocs, getFirestore, getDoc } from "firebase/firestore";
import { app } from '../../confing/FirebaseConfing';
import { Clock, Copy, MapPin, Settings } from 'lucide-react';

import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function MeetingEventList() {

     const db = getFirestore(app);
  const {user} = useKindeBrowserClient()

    const [eventList,setEventList] = useState([])
  useEffect(()=>{
    user&&getEventList()
    user&&getMeetingInfo()
  },[user])
  const getEventList= async()=>{
      const q = query(collection(db, "Event"), where("createdBy", "==", user?.email));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
 const events = []; 
    querySnapshot.forEach((doc) => {
        events.push(doc.data());
    });
    
    setEventList(events); 
});



  }

  const onDeleteEvent=async(event)=>{

    await deleteDoc(doc(db, "Event", event?.date)).then(resp=>{
        toast("Meeting Has Been Deleted")
        getEventList()
    });

}

const getMeetingInfo= async()=>{
  const docRef = doc(db, "Meeting", user?.email);
const docSnap = await getDoc(docRef);
console.log(docSnap.data())
}

const onCopyHandle=()=>{

    const meetingURL = process.env.NEXT_PUBLIC_BASE_URL 
    navigator.clipboard.writeText(event.programsURL) 
                toast("Link Copied")
}
  return (
    <div className='mt-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>

       {eventList.length>0?eventList?.map((event)=>(
            <div className='border shadow-md border-t-8 border-[#FEBF30] p-5 m-3'>

                <div className='flex justify-end cursor-pointer'>
                    

                    <DropdownMenu>
                    <DropdownMenuTrigger><Settings/></DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white shadow-2xl p-3">
                        
                        <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={()=>onDeleteEvent(event)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
           <h2 className='font-bold text-2xl rounded-lg'>{event.meetingName}</h2>

           <div className='flex justify-between items-center mt-3 mb-3'>   
           <h2 className='flex gap-2'><Clock className='text-[#039b95]'/> {event.duration} Min</h2>

            <h2 className='flex gap-2'><MapPin className='text-[#039b95]'/> {event.program} </h2>
           </div>  

           <hr className='text-slate-400' />
           <div>
            <h2 onClick={()=> 
            
            {
              onCopyHandle()
            
            }}  className='text-blue-500 flex mt-3 items-center gap-2 text-sm'> <Copy/>    Copy Link</h2>
           </div>
           
            </div>

       ))
        :<h2>No Events Yet</h2>
    }

   

    </div>
  )
}

export default MeetingEventList
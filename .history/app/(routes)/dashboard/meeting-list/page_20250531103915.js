"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { app } from '../confing/FirebaseConfing';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

function MeetingType() {

  const db = getFirestore(app);
  const {user} = useKindeBrowserClient()


  useEffect(()=>{
    user&&getEventList()
  },[user])
  const getEventList= async()=>{
      const q = query(collection(db, "Event"), where("createdBy", "==", user?.email));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
  }

  return (
    <div className='p-5'>
      <div className='flex flex-col  gap-5 mt-10' >
     <h2 className='text-4xl font-bold'>Your Meeting List</h2>
     <Input className="max-w-xs border-slate-400" placeholder="Search Event"/>

    <hr className='text-slate-400'/>
      </div>
    </div>
  )
}

export default MeetingType
"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../confing/FirebaseConfing';

function MeetingEventList() {

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
    <div>MeetingEventList</div>
  )
}

export default MeetingEventList

"use client"
import React, { useEffect } from 'react'
import {getFirestore, doc, getDoc } from "firebase/firestore";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { app } from './confing/FirebaseConfing';
import { useRouter } from 'next/navigation';
function Dashboard() {
  const {user} = useKindeBrowserClient()
  const db = getFirestore(app);
  const router = useRouter()
  useEffect(()=>{
    MeetingRegistered()
  },[user])

  const MeetingRegistered= async()=>{

const docRef = doc(db, "Meeting",user.email );
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  router.replace("/")
}
  }
  return (
    <div>
     Dashboard
</div>
  )
}

export default Dashboard
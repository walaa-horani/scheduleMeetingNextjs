"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {setDoc, getFirestore ,doc} from "firebase/firestore";
import { app } from '../dashboard/confing/FirebaseConfing'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

function CreateMeeting() {
    const[meetingName,setMeetingName] = useState()
      const {user} = useKindeBrowserClient()
      
    const db = getFirestore(app);


    const onCreateMeeting= async()=>{

        await setDoc(doc(db, "Meeting",user.email ), {
        meetingName: meetingName,
        email: user.email,
        userName: user.given_name+" "+user.family_name
}).then(resp=>{
    console.log("document saved")
});

        // console.log("meeting selected", meetingName)
    }
  return (
    <div className='flex flex-col items-center gap-20 my-10'>
        <Image width={200} height={200} src="/logo.png" />
        <div className='flex flex-col items-center gap-4 max-w-3xl mt-4'>
            <h2 className='font-bold text-3xl text-[#039C96]'>What is Your Meeting About ?</h2>
            <p className='text-slate-400 font-bold'>Create your Meeting Here</p>

        <div className='w-full'>
            <label className='text-slate-400'>Meeting Name</label>
            <Input onChange={(e) =>setMeetingName(e.target.value)} className="mt-4" placeholder="Add Your Meeting Here"/>
        
        </div>
        <Button onClick={onCreateMeeting} disabled={!meetingName} className="w-full mt-2 text-white cursor-pointer">Create Meeting</Button>
        </div>
    </div>
  )
}

export default CreateMeeting
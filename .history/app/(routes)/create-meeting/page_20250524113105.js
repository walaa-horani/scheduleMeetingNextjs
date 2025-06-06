"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function CreateMeeting() {
    const[meetingName,setMeetingName] = useState()

    const onCreateMeeting=()=>{
        console.log("meeting selected")
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
"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { app } from '../confing/FirebaseConfing';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import MeetingEventList from './_component/MeetingEventList';

function MeetingType() {

 

  return (
    <div className='p-5'>
      <div className='flex flex-col  gap-5 mt-10' >
     <h2 className='text-4xl font-bold'>Your Meeting List</h2>
     <Input className="max-w-xs border-slate-400" placeholder="Search Event"/>

    <hr className='text-slate-400'/>
      </div>

      <MeetingEventList/>
    </div>
  )
}

export default MeetingType
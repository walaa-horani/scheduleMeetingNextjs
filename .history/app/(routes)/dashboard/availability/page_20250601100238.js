"use client"
import React, { useEffect, useState } from 'react'
import days from '../../_utils/daysList'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { doc, getFirestore, updateDoc,getDoc } from "firebase/firestore";
import { app } from '../confing/FirebaseConfing'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'

function availability() {
    const db = getFirestore(app);


    const[daysAvailable,setDaysAvailable] = useState(
        {
            sunday:false
         },
         {
            monday:false
         },
         {
            tuesday:false
         },
         {
            wednesday:false
         },
         {
            thursday:false
         },
         {
            friday:false
         },
         {
            saturday:false
         },
)
    const [startTime,setStartTime]  = useState()
     const [endTime,setEndTime]  = useState()

     const {user} = useKindeBrowserClient()

    const onHandle=(day,value)=>{
        setDaysAvailable({
            ...daysAvailable,
            [day]:value
        })

        console.log(daysAvailable)
    }


    useEffect(()=>{
        user&&getMeetingData()
    },[user])
    const getMeetingData= async()=>{
        const docRef = doc(db, "Meeting", user?.email);
        const docSnap = await getDoc(docRef);
        const results = docSnap.data()
        setDaysAvailable(results.daysAvailable)

    }


    const handleClick= async()=>{
        const docRef = doc(db, "Meeting", user?.email);

        await updateDoc(docRef, {
         daysAvailable:daysAvailable,
         startTime:startTime,
         endTime:endTime
}).then(resp=>{
    toast("Time and Date Has Been Selected")
});

        console.log(daysAvailable,startTime,endTime)
    }
  return (
    <div className='p-7'>

        <h2 className='text-4xl font-bold mt-8 text-[#039b95]'>Available Time And Date</h2>
        <hr className='mt-3 text-slate-400'/>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-6'>
                {days?.map((item)=>(
                    <div>
                            <h2 ><Checkbox checked={daysAvailable[item.day]?daysAvailable[item.day]:false} onCheckedChange={(e)=>onHandle(item.day,e)} /> {item.day}</h2>

                    </div>
                ))}
           
        </div>

           <div className='flex gap-10 mt-10'>
            <div>
                <h2 className='font-bold'>Start Time</h2>
                <Input onChange={(e) => setStartTime(e.target.value)} type="time"/>
            </div>

             <div>
                <h2 className='font-bold'>End Time</h2>
                <Input onChange={(e) => setEndTime(e.target.value)}  type="time"/>
            </div>

            </div> 

            <Button onClick={handleClick} className="text-white mt-8">Save</Button>
       

    </div>
  )
}

export default availability
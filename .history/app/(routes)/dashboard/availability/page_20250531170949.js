"use client"
import React from 'react'
import days from '../../_utils/daysList'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function availability() {
  return (
    <div className='p-7'>

        <h2 className='text-4xl font-bold mt-8 text-[#039b95]'>Available Time And Date</h2>
        <hr className='mt-3 text-slate-400'/>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-6'>
                {days?.map((item)=>(
                    <div>
                            <h2 ><Checkbox onCheckedChange={(e)=> console.log(e)} /> {item.day}</h2>

                    </div>
                ))}
           
        </div>

           <div className='flex gap-10 mt-10'>
            <div>
                <h2 className='font-bold'>Start Time</h2>
                <Input type="time"/>
            </div>

             <div>
                <h2 className='font-bold'>End Time</h2>
                <Input type="time"/>
            </div>

            </div> 

            <Button className="text-white mt-8">Save</Button>
       

    </div>
  )
}

export default availability
"use client"
import { ChevronLeft } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import porgrams from '../../_utils/program'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

function MeetingForm() {

    const [program,setProgram]= useState()
    const [meetingName,setMeeting] = useState()
    const [duration,setDuration] = useState()
   
    const [programsURL,setProgramsURL] = useState()
    
  return (
    <div className='p-3'>
       <Link className='cursor-pointer' href={"/dashboard"}> <h1 className='flex gap-2 '> <ChevronLeft/> Cancel</h1></Link>
        <div>
            <h1 className='font-bold text-2xl mt-4'>Create New Meeting</h1>
           

            </div>   

             <hr/>

             <div className='flex flex-col gap-4 my-4'>
                
                <h2>Meeting Name*</h2>
                <Input placeholder="Meeting Name"/>
                </div> 

             <div className='flex flex-col gap-4 my-4'>
                
                <h2>Duration*</h2>
             <Button className="max-w-40 text-white" >

                <DropdownMenu className="bg-white ">
  <DropdownMenuTrigger>30 min</DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2 w-40">
  
    <DropdownMenuItem>15 Min</DropdownMenuItem>
    <DropdownMenuItem>30 Min</DropdownMenuItem>
    <DropdownMenuItem>45 Min</DropdownMenuItem>
    <DropdownMenuItem>60 Min</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

             </Button>
                </div>  

                <div>
                   <h2>Choose Program*</h2>    
                 
                    <div  className='grid grid-cols-3 gap-3'>

                    
                    {porgrams.map((item)=>(
                        <div onClick={()=> setProgram(item.name)} className={ `cursor-pointer hover:bg-[#e8f7f6] border-slate-200 p-2 flex flex-col justify-center border items-center ${program==item.name&&"bg-[#e8f7f6]"}`}>
                       
                        <Image width={70} height={70} alt='image' src={item.icon}/>
                        <h2>{item.name}</h2>
                         </div>
                    ))}
                    </div>
                    
                     {program&&
                        <>
                    <h2 className='mt-4'>Add {program} Url*</h2>
                <Input placeholder="url"/></> }  
                
                    </div>  
                    
                    <Button disabled={!(meetingName || duration ||programsURL || program)} className="mt-10 w-full text-white cursor-pointer">Create</Button>      
    </div>
  )
}

export default MeetingForm
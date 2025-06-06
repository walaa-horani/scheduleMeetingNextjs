import { ChevronLeft } from 'lucide-react'
import React from 'react'
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

function MeetingForm() {
  return (
    <div className='p-3'>
        <h1 className='flex gap-2'> <ChevronLeft/> Cancel</h1>
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

                <DropdownMenu>
  <DropdownMenuTrigger>30 min</DropdownMenuTrigger>
  <DropdownMenuContent>
  
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
                 
                    {porgrams.map((item)=>(
                        <div className='flex items-center gap-5'>
                       
                        <Image width={70} height={70} alt='image' src={item.icon}/>
                        <h2>{item.name}</h2>
                         </div>
                    ))}
                    </div>   
    </div>
  )
}

export default MeetingForm
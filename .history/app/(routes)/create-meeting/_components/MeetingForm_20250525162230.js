import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
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
             <Button className="max-w-40" >30 Min</Button>
                </div>     
    </div>
  )
}

export default MeetingForm
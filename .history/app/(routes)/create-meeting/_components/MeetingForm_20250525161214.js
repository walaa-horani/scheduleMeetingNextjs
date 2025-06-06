import { ChevronLeft } from 'lucide-react'
import React from 'react'

function MeetingForm() {
  return (
    <div className='p-3'>
        <h1 className='flex gap-2'> <ChevronLeft/> Cancel</h1>
        <div>
            <h1 className='font-bold text-2xl'>Create New Meeting</h1>
            </div>    
    </div>
  )
}

export default MeetingForm
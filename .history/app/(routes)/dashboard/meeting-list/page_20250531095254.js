import { Input } from '@/components/ui/input'
import React from 'react'

function MeetingType() {
  return (
    <div className='p-5'>
      <div className='flex flex-col  gap-5' >
     <h2 className='text-4xl font-bold'>Your Meeting List</h2>
     <Input className="max-w-xs border-slate-400" placeholder="Search Event"/>

    <hr className='text-slate-400'/>
      </div>
    </div>
  )
}

export default MeetingType
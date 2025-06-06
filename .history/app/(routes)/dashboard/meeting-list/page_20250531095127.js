import { Input } from '@/components/ui/input'
import React from 'react'

function MeetingType() {
  return (
    <div className='p-5'>
      <div className='flex flex-col  gap-5' >
     <h2>Your Meeting List</h2>
     <Input placeholder="Search Event"/>

    <hr/>
      </div>
    </div>
  )
}

export default MeetingType
import { Input } from '@/components/ui/input'
import React from 'react'

function UserForm() {
  return (
    <div className='flex flex-col p-8'>
            <div>
                <h2>Name*</h2>
                <Input/>
            </div>

             <div>
                <h2>Email*</h2>
                <Input/>
            </div>

             <div>
                <h2>Note*</h2>
                <Input/>
            </div>
    </div>
  )
}

export default UserForm
import { Input } from '@/components/ui/input'
import React from 'react'

function UserForm() {
  return (
    <div className='flex flex-col p-8 gap-3 w-[50%]'>
            <div>
                <h2>Name*</h2>
                <Input className="border border-slate-400"/>
            </div>

             <div>
                <h2>Email*</h2>
                <Input  className="border border-slate-400"/>
            </div>

             <div>
                <h2>Note*</h2>
                <Input  className="border border-slate-400"/>
            </div>
    </div>
  )
}

export default UserForm
import { Input } from '@/components/ui/input'
import React from 'react'
import Image from 'next/image'
function CreateMeeting() {
  return (
    <div className='flex flex-col items-center gap-20 my-10'>
        <Image width={200} height={200} src="/logo.png" />
        <div className='flex flex-col items center gap-4 max-w-3xl mt-4'>
            <h2 className='font-bold text-3xl text-[#039C96]'>What is Your Meeting About ?</h2>
            <p>Create your Meeting Here</p>

        <div>
            <label>Meeting Name</label>
            <Input placeholder="Add Your Meeting Here"/>
        </div>
       
        </div>
    </div>
  )
}

export default CreateMeeting
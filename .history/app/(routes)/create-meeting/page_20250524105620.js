import { Input } from '@/components/ui/input'
import React from 'react'
import Image from 'next/image'
function CreateMeeting() {
  return (
    <div>
        <Image width={200} height={200} src="/logo.png" />
        <div>
            <h2>What is Your Meeting About ?</h2>
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
import React from 'react'
import Image from 'next/image'
function PreviewMeeting({formValue}) {
  return (
    <div className='p-7 shadow-md  m-5'>
        <Image width={150} height={150} alt='logo' src="/logo.png"/>
    </div>
  )
}

export default PreviewMeeting
import React from 'react'
import Image from 'next/image'
function PreviewMeeting({formValue}) {
  return (
    <div className='p-7 shadow-md  m-5'>
        <Image width={150} height={150} alt='logo' src="/logo.png"/>
   
        {/* Meeting Info */}
      <div className='mt-7'>

       <h2 className='font-bold text-[28px] text-[#039b95] '>Meeting Name</h2>
       <h2 className='mt-6'>{formValue?.meetingName?formValue?.meetingName:"Meeting Name"}</h2>
        

        <div>
            <Clock/> <h2> {formValue?.duration} Min</h2>
        </div>
    </div>

    <div>
        {/* Time AND Date */}
    </div>
   
    </div>
  )
}

export default PreviewMeeting
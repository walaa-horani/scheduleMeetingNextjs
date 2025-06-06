import React from 'react'
  import MeetingForm from './_components/MeetingForm'
function CreateMeeting() {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1'>

        <div className='shadow-md border h-screen bg-amber-700'>
         
          <MeetingForm/>
        </div>

        <div className='col-span-2'>

        </div>
    </div>
  )
}

export default CreateMeeting
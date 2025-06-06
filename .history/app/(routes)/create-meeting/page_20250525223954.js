import React from 'react'
  import MeetingForm from './_components/MeetingForm'
function CreateMeeting() {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1'>

<div className=' p-3 shadow-md border border-slate-300 h-screen'>
         
          <MeetingForm/>
        </div>

        <div className='col-span-2'>

        </div>
    </div>
  )
}

export default CreateMeeting
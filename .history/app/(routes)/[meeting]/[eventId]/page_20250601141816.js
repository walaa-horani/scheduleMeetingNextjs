"use client"
import React, { useEffect } from 'react'
import MeetingDataTime from '../_components/MeetingDataTime'

function SharedEventMeeting({params}) {

  useEffect(()=>{
    console.log(params)
  })
  return (
    <div>

      <MeetingDataTime/>
    </div>
  )
}

export default SharedEventMeeting
"use client"
import React, { useEffect } from 'react'
import MeetingDataTime from '../_components/MeetingDataTime'

function SharedEventMeeting({params}) {

    useEffect(()=>{
    params&&getMeetingAndEventDetails()
  },[params])
   const getMeetingAndEventDetails= async()=>{
   const q = query(collection(db, "Meeting"), where("meetingName", "==", params.meeting ));

      const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });

    }

  
  return (
    <div>

      <MeetingDataTime/>
    </div>
  )
}

export default SharedEventMeeting
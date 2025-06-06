"use client"
import React, { useEffect } from 'react'
import MeetingDataTime from '../_components/MeetingDataTime'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../dashboard/confing/FirebaseConfing';


function SharedEventMeeting({params}) {
    const db = getFirestore(app);

    const removeSpacesFromKeys = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    const newKey = key.replace(/\s+/g, ""); // إزالة كل الفراغات من اسم الحقل
    newObj[newKey] = obj[key];
  });
  return newObj;
}

    useEffect(()=>{

      
    params&&getMeetingAndEventDetails()
  },[params])
   const getMeetingAndEventDetails= async()=>{
   const q = query(collection(db, "Meeting"), where("meetingName", "==", params.meeting ));

      const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data();
    
      console.log(doc.data());
     const fixedData = removeSpacesFromKeys(data); 
    console.log("fixedData",fixedData); 
    });

    }

  
  return (
    <div>

      <MeetingDataTime/>
    </div>
  )
}

export default SharedEventMeeting
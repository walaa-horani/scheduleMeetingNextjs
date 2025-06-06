"use client"
import React, { useEffect } from 'react'
import MeetingDataTime from '../_components/MeetingDataTime'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../dashboard/confing/FirebaseConfing';

function SharedEventMeeting({ params }) {
  const db = getFirestore(app);

  const removeSpacesFromKeys = (obj) => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
      const newKey = key.replace(/\s+/g, ""); // إزالة الفراغات من أسماء الحقول
      newObj[newKey] = obj[key];
    });
    return newObj;
  }

  useEffect(() => {
    if (params) {
      getMeetingAndEventDetails();
    }
  }, [params]);

  const getMeetingAndEventDetails = async () => {
    const q = query(collection(db, "Meeting"), where("meetingSlug", "==", params.meeting));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data(); // 🔹 هذا هو المتغير المفقود في كودك
      console.log("Raw data:", data);

      const fixedData = removeSpacesFromKeys(data);
      console.log("Fixed data:", fixedData);
    });
  }

  return (
    <div>
      <MeetingDataTime />
    </div>
  )
}

export default SharedEventMeeting;

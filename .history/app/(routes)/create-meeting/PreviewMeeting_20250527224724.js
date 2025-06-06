import React from 'react'
import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
function PreviewMeeting({formValue}) {
  return (
    
      <div>

         </div>





































    //     <div className='p-7 shadow-md   m-5'>
//         <Image width={150} height={150} alt='logo' src="/logo.png"/>
   
      
      
//         {/* Meeting Info */}

//         <div className='grid grid-cols-1 md:grid-cols-3'>

        
//       <div className='mt-7  border-r border-[#bcbcbc]'>

//        <h2 className='font-bold text-[28px] text-[#039b95] '>Meeting Name</h2>
//        <h2 className='mt-6'>{formValue?.meetingName?formValue?.meetingName:"Meeting Name"}</h2>
        

//         <div className='flex items-center gap-2 mt-5'>
//             <Clock/> <h2> {formValue?.duration} Min</h2>
//         </div>

//         <div className='flex items-center gap-2 mt-5'>
//             <MapPin/> <h2> {formValue?.program} </h2>
//         </div>
         
//          <div className='mt-5'>

         
//         <Link  href={formValue?.programsURL?formValue?.programsURL:"#"}  className='text-blue-500 '>{formValue?.programsURL?formValue?.programsURL:"url"}</Link>
//          </div>
            
//     </div>
// </div>
//     <div>
//         {/* Time AND Date */}
//     </div>
   
//     </div>
  )
}

export default PreviewMeeting
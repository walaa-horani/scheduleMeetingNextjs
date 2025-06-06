import React from 'react'
import days from '../../_utils/daysList'
import { Checkbox } from "@/components/ui/checkbox"

function availability() {
  return (
    <div className='p-7'>

        <h2 className='text-4xl font-bold mt-8 text-[#039b95]'>Available Time And Date</h2>
        <hr className='mt-3 text-slate-400'/>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-6'>
                {days?.map((item)=>(
                    <div>
                            <h2><Checkbox /> {item.day}</h2>

                    </div>
                ))}
           
        </div>

        <div >
            fdgdf
        </div>

    </div>
  )
}

export default availability
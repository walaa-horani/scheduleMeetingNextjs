import React from 'react'
import days from '../../_utils/daysList'
import { Checkbox } from "@/components/ui/checkbox"

function availability() {
  return (
    <div className='p-7'>

        <h2>Available Time And Date</h2>
        <hr/>
        <div className='grid grid-cols-2 md:grid-cols-4'>
                {days?.map((item)=>(
                    <div>
                            <h2><Checkbox /> {item.day}</h2>

                    </div>
                ))}
           
        </div>

    </div>
  )
}

export default availability
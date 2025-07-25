import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import React from 'react'

function DateTimeComponent({date,handleDate,timeSlotes,enabletimeSlotes,setSelectedTime}) {
  return (
    <div>
        <div className='grid grid-cols-12 ' >
          <div className='flex flex-col '>

        
     
         <Calendar


  mode="single"
  selected={date}
  onSelect={(d) => handleDate(d)}
  className="rounded-md border border-[#bcbcbc] "
/>
              </div>

              <div className=' h-72 flex flex-col p-4 overflow-auto gap-4 w-full '>
                {timeSlotes?.map((item)=>(
                 <Button onClick={()=> setSelectedTime(item)} disabled={!enabletimeSlotes} variant="outline" className=" border-[#039b95] ">{item}</Button>
                ))}
              </div>
          </div>
    </div>
  )
}

export default DateTimeComponent
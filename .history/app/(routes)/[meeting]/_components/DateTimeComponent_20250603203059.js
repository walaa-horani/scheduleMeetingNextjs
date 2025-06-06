import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import React from 'react'

function DateTimeComponent({date,handleDate,timeSlotes,enabletimeSlotes,setSelectedTime}) {
  return (
    <div>
        <div className='md:col-span-3 flex p-3 mt-3 w-full' >
          <div className='flex flex-col w-full'>

        
     
         <Calendar


  mode="single"
  selected={date}
  onSelect={(d) => handleDate(d)}
  className="rounded-md border border-[#bcbcbc] w-full"
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
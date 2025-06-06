import React from 'react'
import Image from 'next/image'
import { CalendarRange, Plus, Presentation, TimerIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
function SideNavBar() {
// #FEBF30
    const menu = [
        {
            id:1,
            name:"Meeting Type",
            path:"/dashboard/meeting-type",
            icon: Presentation
        },

         {
            id:2,
            name:"Schedule Meeting",
            path:"/dashboard/schedule-meeting",
            icon: CalendarRange
        },

         {
            id:3,
            name:"Time and Date",
            path:"/dashboard/availability",
            icon: TimerIcon
        },

         
    ]
  return (
    <div className='p-5 py-15'>
        <div className='flex flex-col items-center'>
            <Image src="/logo.png" width={150} height={150} alt="logo"/>
        </div>
        <Button className="mt-5 flex items-center w-full gap-2 text-white"> <Plus/>    Create</Button>

        <div>
            {menu.map((item)=>(
                <Button variant="outlined" className="w-full gap-4 mt-4  ">
                    <item.icon/>{item.name}
                </Button>
            ))}
        </div>
    </div>
  )
}

export default SideNavBar
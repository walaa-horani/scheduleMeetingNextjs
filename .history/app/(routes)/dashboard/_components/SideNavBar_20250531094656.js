"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CalendarRange, Plus, Presentation, TimerIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function SideNavBar() {


    const path = usePathname()
    const [currentPath,setCurrentpath] = useState(path)

    useEffect(()=>{
        path&&setCurrentpath(path)

    },[path])

// #FEBF30
    const menu = [
        {
            id:1,
            name:"Meeting List",
            path:"/dashboard/meeting-list",
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
      
      <Link href={"/create-meeting"}> <Button className="mt-5 flex items-center w-full gap-2 text-white cursor-pointer"> <Plus/>    Create</Button></Link> 

        <div>
            {menu.map((item)=>(
                  <Link href={item.path}>
                <Button  className={` cursor-pointer w-full gap-4 mt-4 border border-[#FEBF30] bg-transparent hover:bg-[#FEBF30] ${currentPath==item.path&&"bg-[#FEBF30]"} `}>
                    <item.icon/>{item.name}
                </Button>
             </Link>   
            ))}
            
        </div>
    </div>
  )
}

export default SideNavBar
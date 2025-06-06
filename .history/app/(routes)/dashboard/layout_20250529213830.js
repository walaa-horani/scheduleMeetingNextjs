import React from 'react'
import SideNavBar from './_components/SideNavBar'
import UserHeader from './_components/UserHeader'
import { Toaster } from "@/components/ui/sonner"

function Dashboardlayout({children}) {
  return (
    <div>
        <div className='hidden md:block w-65 h-screen fixed bg-[#e6f7f6]'>
            <SideNavBar/>

        </div>
        <div className=' md:ml-70'>
          <UserHeader/>
          <Toaster/>
            {children}
        </div>
    </div>
  )
}

export default Dashboardlayout
import React from 'react'
import SideNavBar from './_components/SideNavBar'
function Dashboardlayout({children}) {
  return (
    <div>
        <div className='w-65 h-screen fixed bg-[#e6f7f6]'>
            <SideNavBar/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Dashboardlayout
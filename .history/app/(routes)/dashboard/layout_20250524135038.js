import React from 'react'
import SideNavBar from './_components/SideNavBar'
function Dashboardlayout({children}) {
  return (
    <div>
        <div>
            <SideNavBar/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Dashboardlayout
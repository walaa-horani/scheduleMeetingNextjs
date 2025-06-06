import React from 'react'

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
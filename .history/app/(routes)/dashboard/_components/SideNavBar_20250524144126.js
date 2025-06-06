import React from 'react'
import Image from 'next/image'
function SideNavBar() {
  return (
    <div>
        <div>
            <Image src="/logo.png" width={150} height={150} alt="logo"/>
        </div>
    </div>
  )
}

export default SideNavBar
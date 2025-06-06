import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function SideNavBar() {
  return (
    <div>
        <div>
            <Image src="/logo.png" width={150} height={150} alt="logo"/>
        </div>
        <Button> <Plus/>    Create</Button>
    </div>
  )
}

export default SideNavBar
import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
function SideNavBar() {
  return (
    <div className='p-5 py-15'>
        <div>
            <Image src="/logo.png" width={150} height={150} alt="logo"/>
        </div>
        <Button> <Plus/>    Create</Button>
    </div>
  )
}

export default SideNavBar
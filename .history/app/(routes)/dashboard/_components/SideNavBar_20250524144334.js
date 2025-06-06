import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
function SideNavBar() {
  return (
    <div className='p-5 py-15'>
        <div className='flex flex-col items-center'>
            <Image src="/logo.png" width={150} height={150} alt="logo"/>
        </div>
        <Button className="mt-5 flex items-center w-full gap-2 text-white"> <Plus/>    Create</Button>
    </div>
  )
}

export default SideNavBar
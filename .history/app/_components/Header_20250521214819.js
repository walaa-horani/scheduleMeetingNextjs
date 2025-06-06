import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <Image className='w-[70px] md:w-[100px]' width={70} height={70} alt='logo' src="/logo.png"/>
      
            <ul className=' hidden  md:flex gap-14'>
                <li>Product</li>
                 <li>Pricing</li>
                  <li>About Us</li>
                   <li>Contact Us</li>
            </ul>

            <div>
                <Button className="bg-[#960000]">Login</Button>
                 <Button>Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Header
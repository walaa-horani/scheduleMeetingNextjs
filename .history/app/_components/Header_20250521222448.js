import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div>
        <div className='flex justify-between items-center p-4 shadow-md'>
            <Image className='w-[70px] md:w-[100px]' width={70} height={70} alt='logo' src="/logo.png"/>
      
            <ul className=' hidden text-[#039C96] font-bold  md:flex gap-14'>
                <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>Product</li>
                 <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>Pricing</li>
                  <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>About Us</li>
                   <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>Contact Us</li>
            </ul>

            <div >
                <Button className="bg-[#039C96] mr-3 cursor-pointer">Login</Button>
                 <Button className="bg-[#FEBF2F] cursor-pointer">Get Started</Button>
            </div>
        </div>

        <div className='text-center mt-20'>
          <h1 className='text-[60px] text-[#039C96]'>Make scheduling effortless</h1>
          <h1 className='text-[30px] text-slate-400'> our smart scheduling tool helps you find the perfect time in seconds </h1>

          
            <div className='flex'>
                <Button className="bg-[#039C96] mr-3 cursor-pointer">Login</Button>
                 <Button className="bg-[#FEBF2F] cursor-pointer">Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Header
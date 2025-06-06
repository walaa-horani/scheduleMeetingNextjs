import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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

        <div className='text-center mt-20 max-w-3xl m-auto'>
          <h1 className=' text-[40px] md:text-[60px] text-[#039C96]'>Make scheduling effortless</h1>
          <h1 className='text-[30px] text-slate-400'> our smart scheduling tool helps you find the perfect time in seconds </h1>

          
            <div className='mt-5 '>
                <Button className="bg-[#039C96] mr-3 cursor-pointer">Sing Up With Google</Button>
                 <Button className="bg-[#FEBF2F] cursor-pointer">Sing Up With Facebook</Button>
            </div>
            <hr className= 'p-5 text-slate-300' />
            <h2><Link href="" className="text-primary">Sign Up With Email</Link> </h2>
        </div>
    </div>
  )
}

export default Header
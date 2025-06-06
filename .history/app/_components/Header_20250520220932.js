import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div>
        <div>
            <Image className='w-[70px] md:w-[100px]' width={70} height={70} alt='logo' src="/logo.png"/>
        </div>
    </div>
  )
}

export default Header
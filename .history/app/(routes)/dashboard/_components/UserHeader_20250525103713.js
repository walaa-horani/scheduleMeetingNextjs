import React from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
function UserHeader() {

  return (
    <div>
      <Image src={user?.picture} width={50} height={50} alt='image'/>
    </div>
  )
}

export default UserHeader
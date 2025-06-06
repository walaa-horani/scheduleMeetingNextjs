import React from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
function UserHeader() {
        const {user} = useKindeBrowserClient()
    
  return (
    <div>
      <Image src={user?.picture}/>
    </div>
  )
}

export default UserHeader
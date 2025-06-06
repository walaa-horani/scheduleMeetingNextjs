"use client"
import React from 'react'
import Image from 'next/image';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

function UserHeader() {
  const {user } = useKindeBrowserClient();

  return user&&(
    <div className="float-right">
      <Image src={user?.picture} width={50} height={50} alt='image'/>
    </div>
  )
}

export default UserHeader
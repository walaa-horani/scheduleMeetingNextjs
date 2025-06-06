"use client"
import React from 'react'
import Image from 'next/image';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { ChevronDown } from 'lucide-react';

function UserHeader() {
  const {user } = useKindeBrowserClient();

  return user&&(
    <div className="flex items-center float-right p-3">
      <Image className='rounded-full' src={user?.picture} width={50} height={50} alt='image'/>
      <ChevronDown/>
    </div>
  )
}

export default UserHeader
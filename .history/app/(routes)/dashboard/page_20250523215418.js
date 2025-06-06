import React from 'react'
rm -rf .next
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
function Dashboard() {
  return (
    <div><LogoutLink>Log out</LogoutLink>
</div>
  )
}

export default Dashboard
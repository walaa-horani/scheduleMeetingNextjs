import React from 'react'

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
function Dashboard() {
  return (
    <div><LogoutLink>Log out</LogoutLink>
</div>
  )
}

export default Dashboard
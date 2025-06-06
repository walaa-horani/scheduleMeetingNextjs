import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

function Dashboard() {
  const {isAuthenticated} = getKindeServerSession();

  return (
    <div>
      gggg
</div>
  )
}

export default Dashboard
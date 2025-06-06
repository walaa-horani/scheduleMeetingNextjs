import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

function Dashboard() {
  const {isAuthenticated} = getKindeServerSession();

  return (
    <div>
      dashboard
</div>
  )
}

export default Dashboard
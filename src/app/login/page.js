import LoginPage from '@/components/LoginPage'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function page() {
  const session =await getServerSession(authOptions);
    if(session) redirect("/home")
  return (
    <div>
        <LoginPage/>
    </div>

  )
}

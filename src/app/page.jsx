'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default () => {
  const { data: session, status } = useSession()

  if (status === 'unauthenticated') return <button onClick={signIn}>Sign In</button>
  else if (status === 'authenticated') return <button onClick={signOut}>Sign Out {session.provider === 'credentials' ? session.user.username : session.user.name}</button>
  else return <span>Loading...</span>
}
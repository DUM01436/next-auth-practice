import SessionProvider from '@/lib/auth/session'

export default ({ children }) => {
  return (
    <html>

      <head>
        <title>NextAuth</title>
      </head>

      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>

    </html>
  )
}
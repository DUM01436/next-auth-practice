import SessionProvider from '@/lib/auth/session'

export default ({ children }) => {
  return (
    <html>

      <head>
        <title>Next Auth</title>
      </head>

      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>

    </html>
  )
}
import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { MongoClient } from 'mongodb'

import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  adapter: MongoDBAdapter(new MongoClient('mongodb://localhost:27017/next-auth').connect()),
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: ({ username, password }) => {
        return { username }
      }
    }),
    // EmailProvider({
    //   server: {
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     auth: {
    //       user: 'dum01436@gmail.com',
    //       pass: '///////'
    //     }
    //   },
    //   from: 'Next Auth'
    // }),
    GoogleProvider({
      clientId: '375562148089-m78j5hv8fmnlc1m18d2utcimgk774moo.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
  callbacks: {
    jwt: ({ token, user, account }) => {
      if (user && account) token = { ...token, user, provider: account.provider }
      return token
    },
    session: ({ session, token: { user, provider } }) => {
      session = { ...session, user, provider }
      return session
    }
  }
})
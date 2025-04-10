import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import authConfig from "./auth.config"

// Extend the User type to include customField





export const { handlers, signIn, signOut, auth } = NextAuth({
      adapter: PrismaAdapter(db),
      callbacks: {
            async session ({token, session }){

                  console.log(token)
                 if(token.sub && session.user){
                  session.user.id=token.sub
                 }

            //      session.user.customField=token.customField
                 return session
            },
            async jwt({token}){

                  token.customField = "ArangoDev"
                //  console.log({token})
                  return token
            }

      
      },
      session:{strategy :"jwt"},
      ...authConfig

})
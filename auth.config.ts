


import type { NextAuthConfig } from 'next-auth';
import Credentials from  'next-auth/providers/credentials'
import { signInShema } from "./lib/zod";
import { getUserByEmail } from "./data/user";

import bcryptjs from 'bcryptjs'

export default {

      providers:[
            Credentials({
                  async authorize(credentials){
                        const validateFields =signInShema.safeParse(credentials)

                        if(!validateFields.success){
                              return null
                        }
                        if(validateFields.success){
                              const {email, password}= validateFields.data
                              const user = await getUserByEmail(email)

                              if(!user ||!user.password) return null

                              const passwordsMatch = await  bcryptjs.compare(password,user.password)

                              if(passwordsMatch){
                                    return user
                              }
                         }
                         return null
                  }
            })
      ]
      } satisfies NextAuthConfig

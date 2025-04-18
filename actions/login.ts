"use server"

import { signIn } from "@/auth"
import { signInShema } from "@/lib/zod"

import { AuthError } from "next-auth"
import { z } from "zod"


export const login = async (values:z.infer<typeof signInShema>) =>{
      const validateField = signInShema.safeParse(values)

      if(!validateField.success){
            return {error: "Invalid fields !"}
      }
      const {email, password}= validateField.data

      try {
            await signIn("credentials",{
                  email,
                  password,
                  redirectTo:"/profiles"
            })
            return {success:true}
      } catch (error) {
            if(error instanceof AuthError)
                  switch(error.type){
            case "CredentialsSignin":
            return {error: "Invalid credentials"}

      default :
      return {error:"Something ment wrong"}

            } 
            
      }
}
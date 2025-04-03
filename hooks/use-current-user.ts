import {create} from 'zustand'

import {persist, createJSONStorage} from 'zustand/middleware'

import {  UserNetflix } from '@prisma/client'





interface UseCurrentUser{
      currentUser:UserNetflix | null
      chageCurrentUser:(data: UserNetflix) => void
}
export const UseCurrentNerflixUser = create(persist<UseCurrentUser>(
      (set)=>({
            currentUser:null,
            chageCurrentUser:(data:UserNetflix)=>{
                  set({currentUser:data})
            }
            

      }),
      {
            name: "Current-netflix-user",
            storage:createJSONStorage(()=> sessionStorage)
      }
))
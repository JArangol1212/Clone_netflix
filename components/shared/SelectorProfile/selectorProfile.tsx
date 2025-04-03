
"use client";
import { useRouter } from "next/navigation";
import { UseCurrentNerflixUser } from "@/hooks/use-current-user";
import Image from "next/image";
import { ChevronDown, LogOut, Pencil } from "lucide-react";

import { signOut } from "next-auth/react";
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,

      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
    


import { SelectorProfileProps } from "./SelectorProfile.types";
import { UserNetflix } from "@prisma/client";






export function SelectorProfile(props: SelectorProfileProps) {

      const {users }= props;
      const router = useRouter()
      const {chageCurrentUser, currentUser}= UseCurrentNerflixUser()

      const onChangeUser = (userNetflix: UserNetflix) => {
           chageCurrentUser(userNetflix)
           router.refresh()
      }

    return (
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
            <div className="flex gap-1 items-center">
              <Image src={currentUser ? currentUser.avatarUrl :"/profiles/profile-1.png" } alt="profile Image" width={35} height={35} className="rounded-lg"></Image>
              <ChevronDown />
            </div>
      
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent">
       {users.map((user) =>(
            <DropdownMenuItem key={(user.id)} onClick={() => onChangeUser(user)}
            className="flex gap-2 mb-3 group"
            > 
            <Image src={user.avatarUrl} alt="profile Image" height={30} width={30}></Image>
       
             <p className= "text-white group-hover:text-black">{user.profileName}</p>
           </DropdownMenuItem>

       ))}
       <DropdownMenuItem className="flex gap-2 mb-3 group text-white cursor-pointer"
        onClick={() => router.push("/profiles")}>
        <Pencil className="w-4 h-4"/>
          Administrar perfiles

   
       </DropdownMenuItem>
       <DropdownMenuItem className="flex gap-2 mb-3 group text-white cursor-pointer" onClick={() => signOut()}>
        <LogOut className="w-4 h-4"/>
        Cerrar sesión

       </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
    
    )
}
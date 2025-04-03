import { currenUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function POST(req:Request){
      const user =await currenUser()

      const {profileName, avatarUrl} = await req.json()

      if(!user){
            return new NextResponse("Unauthorizfed",{status:401})

      }

      if(!profileName || !avatarUrl || !user.id){
            return new NextResponse("Invalid data", {status:400})

      }
      const userCreated = await db.userNetflix.create({
            data:{
                  profileName,
                  avatarUrl,
                  userId:user.id
            }
            
      })
      return NextResponse.json(userCreated)

}

// Funcion para poder eliminar

export async function DELETE(req: Request){

      const user = await currenUser()

      if(!user){

            return new NextResponse("Unauthorized", {status:401})
      }
      const {userIdNetflix} = await req.json()

      if(!userIdNetflix ){
            return new NextResponse("Id is required", {status:400})

      }

      const userDeleted = await db.userNetflix.delete({
            where:{
                  id:userIdNetflix
            }
      })
      return NextResponse.json(userDeleted)

}
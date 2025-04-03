"use client"
import { useState } from "react"


import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react"
import { FormAddProfile } from "../../FormAddProfile"

    



export function AddProfiles(){
  const [open , setOpen] = useState(false)
      return (
            <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                  <div className="group hover:cursor-pointer">
                        <div className="w-[140px] h-[140px] flex flex-col justify-center items-center group-hover:bg-slate-300 rounded-md ">
                              <PlusCircle className="w-16 text-gray-500 "/>


                        </div>
                        <p className="mt-2 text-gray-500 uppercase text-lg">Añdir Perfil</p>

                  </div>

            </DialogTrigger>

            <DialogContent className="sm:mx-w-[425px] bg-black">
              <DialogHeader>
                <DialogTitle>Añadir Perfil</DialogTitle>
                <DialogDescription>

                  Añede los diferentes perfiles a tu app
                 
                </DialogDescription>
              </DialogHeader>
              <FormAddProfile setOpen={setOpen}/>
            </DialogContent>
          </Dialog>
          
      )
}
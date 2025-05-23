"use client"

import { ArrowLeft } from "lucide-react";
import { NavbarFilmProp } from "./NavbarFilm.types";
import { useRouter } from "next/navigation";

export function NavbarFilm(props: NavbarFilmProp) {
      const { titleMovie } = props
      const router = useRouter()


      const backToHome =()=>{
            router.push("/")
            
      }

      return (
            <nav className="fixed flex gap-2 p-5 cursor-pointer items-center z-10 bg-zinc-900/70 "
             onClick={backToHome}
            >
                  <ArrowLeft className="w-6 h-6 " />
                  <p>


                        Estás viendo : <span className="font-bold">{titleMovie}</span></p>
            </nav>
      )
}
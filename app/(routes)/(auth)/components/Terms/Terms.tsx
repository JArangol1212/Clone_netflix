
"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Terms(){

   const [showExtraTerms, setShowExtraTerms] = useState(false)
   return (
       <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72"> 
     <div className="mb-5">

      <span> Esta página utiliza Google reCAPTCHA pata verificar que no eres un robot </span>
       
      <Button variant="ghost" onClick={()=>setShowExtraTerms(!showExtraTerms)}
         className="opacity-1 text-[#0071eb] hover:bg-transparent p-0  h-fit"> Mas información</Button>
     </div>
    <div className="h-28">
      {showExtraTerms &&(
         <p>
            La información recopila por Google reCAPCHA está sujeta a la 
            Politica de Privacidad y las Condiciones de servicio de Google,y 
            se utilza para proporcionar, mantener y mejorar el servicio de reCAPCHA, asi como 
            fines generales de seguridad (Google no la utiliza para publicidad personalizada)
         </p>
      ) }
    </div>
   

   </div> 
   )  
   
}


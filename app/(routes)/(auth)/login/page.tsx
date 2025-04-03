import { Checkbox } from "@/components/ui/checkbox"
import  Link  from 'next/link'
import { Terms } from "../components/Terms"
import { LoginForm } from "./LoginForm"
import { auth } from "@/auth"



export default async function LoginPage (){

      const session = await auth()
      return (
            <div >
                  <p className="text-3xl font-bold text-left mb-7"> Iniciar Sesion</p>
                   
                 
                   <LoginForm/>
               

                  <div className="mt-5 text-center">
                        <Link href="/" className='hover:underline hover:opacity-70'>
                        ¿Has olivadado tu contraseña?
                        </Link>


                  </div>
                  <div className='flex items-center space-x-2 mt-4'>
                        <Checkbox id='terms' className="border-white"></Checkbox>
                      <label className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                        Recuerdame
                      </label>
                  </div>
                  <div className='mt-4 flex gap-1'>
                   <p className='text-white opacity-70'>¿Todavia sin Netflix</p>
                   <Link href="/register" className='opacity-1 text-white'>Suscríbite ahora</Link>
                  </div>
                 <Terms/>
            </div>
      )
}
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./RegisterForm.form"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"





export function RegisterForm() {
  const router =useRouter()
     

      const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
              email: "",
              password:"",
              repeatPassword:""
              
              
              
            },
          })
         
          // 2. Define a submit handler.
          const  onSubmit = async (values: z.infer<typeof formSchema>) =>{

             try {
              await axios.post('/api/auth/register',values)
              
              toast({
                title:"Usuario registrado correctamente"
              })
             } catch (error) {
              console.log(error)
              toast({
                title:"Ha ocurrido un error al registrar el usuario",
                variant:"destructive"
              })
            router.push("/profiles")
              
             }
          }
          return (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-white">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                     
                      <FormControl>
                        <Input placeholder="Correo Electronico" {...field} className="h-14" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                     
                      <FormControl>
                        <Input placeholder="Password" {...field} className="h-14" type="password"  />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  <FormField
                  control={form.control}
                  name="repeatPassword"
                  render={({ field }) => (
                    <FormItem>
                     
                      <FormControl>
                        <Input placeholder="Repite la contraseña" {...field} className="h-14" type="password" />
                        
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit"className="w-full bg-[#E50914]">Registrarse</Button>
              </form>
            </Form>
          )
        }
          
          

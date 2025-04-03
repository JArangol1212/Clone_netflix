import { z } from "zod"


// Esquema de validación
export const formSchema = z
  .object({
    email: z.string().min(2, {
      message: "Email is too short.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 6 characters.",
    }),
    repeatPassword: z.string() 
    
    
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "The passwords must match",
    path: ["repeatPassword"],
  })



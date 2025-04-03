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


  model estudiante {
  id              Int       @id @default(autoincrement())
  nombre          String    @db.VarChar(100)
  apellidopaterno String    @db.VarChar(100)
  apellidomaterno String    @db.VarChar(100)
  tipodocumento   String    @db.VarChar(5)
  numerodocumento String    @db.VarChar(15)
  direccion       String    @db.VarChar(100)
  fechanacimiento DateTime? @db.Date
  email           String    @db.VarChar(100)
  celular         String    @db.VarChar(9)
  idcargo         Int?
  usuario         usuario?  @relation(fields: [idcargo], references: [id], onDelete: NoAction, onUpdate: NoAction)
}
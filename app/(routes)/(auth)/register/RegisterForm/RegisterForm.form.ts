import { z } from "zod";

// Esquema de validación
export const formSchema = z
  .object({
    email: z.string().min(2, {
      message: "Email is too short.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    repeatPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "The passwords must match",
    path: ["repeatPassword"],
  });

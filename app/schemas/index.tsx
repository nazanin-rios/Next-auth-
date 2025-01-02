import * as z from "zod"

export const LoginSchema=z.object({
    email:z.string().email(),
    password:z.string().min(3,{
        message:"password is required"
    })
})

export const RigesterSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6,{
        message:"minimum 6 charecters requierd"
    }),
    name:z.string().min(1,{
        message:"name is requierd"
    })
})
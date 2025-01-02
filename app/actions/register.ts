'use server';

import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { RigesterSchema } from "../schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RigesterSchema>) => {
  const validatedFields = RigesterSchema.safeParse(values);
  
  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)


  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.User.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "user created!" };
};

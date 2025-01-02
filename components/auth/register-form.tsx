"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RigesterSchema } from "@/app/schemas";
import * as z from "zod";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-Success";
import { useState, useTransition } from "react";
import { register } from "@/app/actions/register";

const RigesterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RigesterSchema>>({
    resolver: zodResolver(RigesterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:""
    },
  });

  const onSubmit = (values: z.infer<typeof RigesterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const response = await register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
      console.log(response);
    });
  };

  return (
    <CardWrapper
      headerLable="Create an account"
      backButtonLable="Aready have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nazanin"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="name@email.com"
                      type="email"
                      disabled={isPending}
                    />
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
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="****"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">
            create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RigesterForm;

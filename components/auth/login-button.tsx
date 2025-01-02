"use client";

import { useRouter } from "next/navigation"; // از `next/navigation` به جای `next/router` استفاده کنید.

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
}

export const LoginButton = ({
  children,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
    console.log("Navigating to /auth/login");
  };

  if (mode === "modal") {
    return <span>todo: modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer text-blue-500 underline">
      {children}
    </span>
  );
};

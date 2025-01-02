import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-col gap-6 bg-[#2a4258]">
      <h1 className="font-semibold text-6xl text-white"> 🔐 Auth</h1>
      <p className="text-gray-200">you dont have an acconte?</p>
      <LoginButton>
        <Button variant="secondary">sign in</Button>
      </LoginButton>
    </main>
  );
}

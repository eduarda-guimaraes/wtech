import React from "react";
import { SideLogo } from "../components/SideLogo";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden bg-[#F0F2F5] lg:bg-transparent">
      
      <section className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <SideLogo />
      </section>

      <section className="w-full lg:w-1/2 flex items-center justify-center bg-white min-h-screen shadow-2xl lg:shadow-none">
        <div className="w-full max-w-[450px] px-6">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
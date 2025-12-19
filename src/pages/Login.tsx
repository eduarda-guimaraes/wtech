import React from "react";
import { SideLogo } from "../components/SideLogo";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <main className="flex min-h-screen w-full overflow-hidden">
      <section className="w-1/2 flex items-center justify-center">
        <SideLogo />
      </section>

      <section className="w-1/2 flex items-center justify-center bg-white">
        <LoginForm />
      </section>
    </main>
  );
}
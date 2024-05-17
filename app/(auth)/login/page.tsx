import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

export default async function Login() {
  return (
    <div className="min-h-screen flex items-center">
      <section className="w-full flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/icons/logo-white.png"
          alt="logo"
          className="drop-shadow-[0_0_1rem_theme(colors.primary.DEFAULT)] pb-16"
          width={356}
          height={170}
          priority
        />
        <LoginForm />
      </section>
    </div>
  );
}

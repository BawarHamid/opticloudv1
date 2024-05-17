"use client";

import { useFormState } from "react-dom";
import { login } from "@/lib/actions/auth";
import { SubmitButton } from "../Buttons";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form
      className="flex flex-col gap-2 w-2/3 md:w-1/2 xl:w-1/4"
      action={formAction}
    >
      <input
        name="username"
        className="text-black px-4 py-2 rounded h-12"
        type="text"
        placeholder="Username"
      />
      <input
        name="password"
        className="text-black px-4 py-2 rounded h-12"
        type="password"
        placeholder="Password"
      />
      <SubmitButton text="Log In" />
      <p className="pt-2 h-8 text-red-700">{state?.error}</p>
    </form>
  );
}

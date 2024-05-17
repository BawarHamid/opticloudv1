"use client";

import clsx from "clsx";
import Link from "next/link";
import { logout } from "@/lib/actions/auth";
import { useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx(
        "bg-primary px-4 py-2 text-lg rounded mt-4 h-12 hover:bg-opacity-80 transition-colors",
        { "bg-gray-600": pending }
      )}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "..." : text}
    </button>
  );
}

export function LogoutButton({ className }: { className?: string }) {
  return (
    <form action={logout}>
      <button type="submit" className={`${className} w-max px-4 py-3`}>
        Log out
      </button>
    </form>
  );
}

export function LinkButton({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      className={`${className} px-4 py-2 text-lg rounded bg-primary hover:bg-opacity-80 transition-colors`}
      href={href}
    >
      {text}
    </Link>
  );
}

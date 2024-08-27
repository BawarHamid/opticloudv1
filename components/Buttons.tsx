"use client";

import clsx from "clsx";
import Link from "next/link";
import { logout } from "@/lib/actions/auth";
import { useFormStatus } from "react-dom";
import { TbArrowLeft, TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const baseStyle = [
  "flex items-center justify-center px-4 py-2 rounded text-base",
  "focus:outline-none focus-visible:ring",
  "disabled:bg-slate-600",
  "transition-colors",
];
const primaryColors =
  "bg-primary text-onPrimary hover:bg-primary-700 active:bg-primary-800";
const dangerColors =
  "bg-danger text-onPrimary hover:bg-danger-800 active:bg-danger-900 focus-visible:ring-danger-900";

export function SubmitButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx(baseStyle, primaryColors, `${className}`)}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? <Loader height={16} width={2} color="#FFFFFF" /> : text}
    </button>
  );
}

export function LogoutButton({ className }: { className?: string }) {
  return (
    <form action={logout}>
      <button
        type="submit"
        className={clsx(
          "p-2",
          "hover:text-danger",
          "transition-colors",
          `${className}`
        )}
      >
        <TbLogout size={24} />
      </button>
    </form>
  );
}

export function PrimaryButton({
  text,
  className,
  onClick,
  disabled = false,
  pending = false,
  isDanger = false,
}: {
  text: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  pending?: boolean;
  isDanger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        baseStyle,
        isDanger ? dangerColors : primaryColors,
        `${className}`
      )}
      disabled={disabled || pending}
      aria-disabled={disabled}
    >
      {pending ? <Loader height={16} width={2} color="#FFFFFF" /> : text}
    </button>
  );
}

export function LinkButton({
  text,
  className,
  href,
}: {
  text: string;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(baseStyle, primaryColors, `${className}`)}
    >
      {text}
    </Link>
  );
}

export function TextButton({
  text,
  colorVariant = "gray",
  className,
  href,
  onClick,
}: {
  text: string;
  colorVariant?: "gray" | "primary";
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const style = [
    "p-1 rounded font-semibold text-center",
    "focus:outline-none focus-visible:ring",
    "transition-colors",
  ];
  const colorVariants = {
    gray: "hover:bg-slate-400/30 active:bg-slate-400/50",
    primary: "hover:bg-primary/30 active:bg-primary/50",
  };

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={clsx(style, colorVariants[colorVariant], `${className}`)}
        >
          {text}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={clsx(style, colorVariants[colorVariant], `${className}`)}
        >
          {text}
        </button>
      )}
    </>
  );
}

export function BackButton({ className }: { className?: string }) {
  const style = [
    "p-1 rounded-full font-semibold text-center",
    "focus:outline-none focus-visible:ring",
    "transition-colors",
    "hover:bg-slate-400/30 active:bg-slate-400/50",
  ];
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={clsx(style, `${className}`)}
    >
      <TbArrowLeft size={32} />
    </button>
  );
}

export function IconButton({
  className,
  children,
  href,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const style = [
    "p-1 rounded-full font-semibold text-center",
    "focus:outline-none focus-visible:ring",
    "transition-colors",
    "hover:bg-slate-400/30 active:bg-slate-400/50",
  ];

  return (
    <>
      {href ? (
        <Link href={href} className={clsx(style, `${className}`)}>
          {children}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={clsx(style, `${className}`)}
        >
          {children}
        </button>
      )}
    </>
  );
}

export function TabButton({
  text,
  className,
  onClick,
  active,
}: {
  text: string;
  className?: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "w-full p-1 rounded-t font-semibold text-sm text-center border-b-2",
        "focus:outline-none focus-visible:ring",
        "hover:bg-slate-400/30 active:bg-slate-400/50",
        "transition-colors",
        `${className}`,
        active ? "border-primary text-primary" : "border-slate-400/50"
      )}
    >
      {text}
    </button>
  );
}

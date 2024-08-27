"use client";

import { ReactNode, useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { PrimaryButton, TextButton } from "../Buttons";

export function AlertDialog({
  open,
  setOpen,
  title,
  message,
  isDanger = false,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  message?: string;
  isDanger?: boolean;
  children: ReactNode;
}) {
  const [isPending, setIsPending] = useState<boolean>(false);

  async function confirmAction() {
    setIsPending(true);
    setIsPending(false);
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 w-screen backdrop-blur-sm bg-black/60 overflow-y-scroll no-scrollbar">
        <div className="flex w-screen items-center justify-center min-h-full p-4 overflow-y-scroll no-scrollbar">
          <DialogPanel className="w-full max-w-3xl p-6 space-y-4 rounded bg-primary-200 text-onPrimary-dark border border-slate-400 overflow-y-scroll no-scrollbar">
            <DialogTitle className="font-bold pb-2">{title}</DialogTitle>
            <Description>{message}</Description>
            {children}
            <div className="flex justify-end gap-4 mt-4 min-h-12">
              <TextButton
                text="Cancel"
                onClick={() => setOpen(false)}
                className="w-24 px-4"
              />
              <PrimaryButton
                text="Confirm"
                onClick={confirmAction}
                isDanger={isDanger}
                pending={isPending}
                className="w-24"
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export function DialogWrapper({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 w-screen backdrop-blur-sm">
        <div className="flex w-screen items-center justify-center min-h-full p-4">
          <DialogPanel className="w-full max-w-3xl p-6 space-y-4 rounded bg-primary-50 text-onPrimary-dark border border-slate-400">
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function Modal({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Dialog open={true} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 w-screen backdrop-blur-sm">
        <div className="flex w-screen items-center justify-center min-h-full p-4">
          <DialogPanel className="w-full max-w-3xl p-6 space-y-4 rounded bg-primary-50 text-onPrimary-dark">
            <DialogTitle className="font-bold pb-2">{title}</DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export function LoadingModal() {
  return (
    <Dialog open={true} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 h-screen w-screen backdrop-blur-sm"></div>
    </Dialog>
  );
}

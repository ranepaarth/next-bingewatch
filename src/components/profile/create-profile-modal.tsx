"use client";

import { useRouter } from "@/navigation";
import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import ButtonPrimary from "../reusable/button-primary";
import { createProfileAction } from "@/server-actions/create-profile";
import { Loader2 } from "lucide-react";

type CreateProfileModalProps = {
  email: string | undefined;
};

const CreateProfileModal: FC<CreateProfileModalProps> = ({ email }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const result = await createProfileAction(formData);
      if (result?.success) {
        setLoading(false);
        dialogRef.current?.close();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      className="p-4 backdrop:bg-black/50 w-full h-full max-w-[550px] max-h-[500px] bg-transparent"
    >
      <div className="relative w-full h-full flex flex-col rounded-xl bg-neutral-800 p-4 text-neutral-200 cursor-default overflow-">
        <button
          onClick={() => dialogRef.current?.close()}
          className="absolute top-4 right-4 text-2xl px-2 hover:bg-neutral-100/30 rounded-full aspect-square transition-colors ease-in-out duration-200"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold border-b border-primary-400 w-fit pb-px">
          Create Profile
        </h2>
        <div className="w-full flex-grow py-2 overflow-y-auto">
          <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 hover:cursor-not-allowed">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                value={email}
                className="w-full p-4 rounded-md bg-transparent border border-neutral-400 outline-none disabled:opacity-80"
                disabled={!!email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="profile-name" className="font-semibold">
                Profile Name
              </label>
              <input
                id="profile-name"
                className="w-full p-4 rounded-md bg-transparent border border-neutral-400 outline-none placeholder:text-neutral-600"
                placeholder="New Profile"
                name="name"
                autoFocus
              />
            </div>
            <ButtonPrimary className="font-bold text-xl rounded-md mt-auto disabled:bg-primary-700" disabled={loading}>
              {loading ? <Loader2 className="w-6 h-6 animate-spin" strokeWidth={2.5}/> : "Create Profile"}
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateProfileModal;

"use client";

import { CircleX } from "lucide-react";
import React, { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  id: string;
  register: UseFormRegisterReturn;
  label: string;
  type?: string;
  error: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  register,
  error,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className="relative focus-visible:outline-2 group"
      autoFocus={type === "email"}
    >
      <input
        id={id}
        type={type}
        className={`block rounded-md px-6 pt-6 pb-1 w-full text-base text-white bg-blue-400/15 appearance-none focus-visible:ring-0 peer ${
          error && !focus ? "border border-red-500" : "border-transparent"
        }`}
        autoFocus={type === "email"}
        {...register}
        autoComplete="off"
        placeholder=" "
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
      <label
        htmlFor={id}
        className="absolute text-base text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus-visible:scale-75 peer-focus-visible:-translate-y-3 
        "
      >
        {label}
      </label>
      {error && (
        <p
          className={`text-red-500 text-xs mt-1 gap-x-1 ${
            !focus ? "flex" : "hidden"
          }`}
        >
          <CircleX className="w-4 h-4" />
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default Input;

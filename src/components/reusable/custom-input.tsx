"use client";

import React, { InputHTMLAttributes, useState } from "react";
import { EyeOff, EyeIcon } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  type,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`relative focus-visible:outline-2 group flex items-center justify-between rounded-sm bg-neutral-700/20 border ${
          error ? "border-red-500" : "border-neutral-600"
        } w-full flex-grow focus-within:border-white`}
      >
        <input
          id={label}
          type={showPassword ? "text" : type}
          className={`block px-6 pt-6 pb-1 w-full text-base text-white bg-transparent appearance-none outline-none focus-visible:ring-0 peer`}
          autoComplete="off"
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={label}
          className="absolute text-base text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus-visible:scale-75 peer-focus-visible:-translate-y-3 cursor-text
        "
        >
          {label}
        </label>
        {type == "password" && (
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            className="pr-6 text-neutral-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="pt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

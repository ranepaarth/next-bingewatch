"use client";

import { EyeIcon, EyeOff } from "lucide-react";
import React, { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string | undefined;
  type: string;
  isDirty: boolean;
}

// Forward ref to allow integration with react-hook-form
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, className, type, isDirty, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const borderColor = () => {
      if (errorMessage) {
        return "border-red-600"; // Error state
      }
      if (!errorMessage && isDirty) {
        return "border-green-600"; // Valid state after submission or change
      }
      return "border-neutral-600"; // Initial state
    };

    // console.log({ isDirty, errorMessage }, borderColor(), ` ${type}`);
    return (
      <div className="flex flex-col gap-1">
        <div
          className={`relative focus-visible:outline-2 group flex items-center justify-between rounded-sm border ${borderColor()} w-full flex-grow ${className}`}
        >
          <input
            id={label}
            type={showPassword ? "text" : type}
            ref={ref} // Attach ref here
            className="block px-6 pt-6 pb-2 w-full text-base bg-transparent appearance-none outline-none focus-visible:ring-0 peer"
            autoComplete="off"
            placeholder=" "
            {...props}
          />
          <label
            htmlFor={label}
            className="absolute text-base text-zinc-500 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus-visible:scale-75 peer-focus-visible:-translate-y-3 peer-focus-visible:font-medium cursor-text"
          >
            {label}
          </label>
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="mr-6 text-neutral-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
        {errorMessage && (
          <p className="pt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Required when using forwardRef

export default Input;

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between rounded-sm bg-neutral-700/20 px-4 border border-neutral-600 w-full flex-grow focus-within:border-white">
        <input
          className={`placeholder:font-light bg-transparent h-14 w-full flex-grow focus-within:outline-none ${className}`}
          {...props}
        />
      </div>
      {error && <p className="pt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

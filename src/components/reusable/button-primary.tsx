import React, { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ className, text }) => {
  return (
    <button
      className={`bg-primary-600 rounded-sm flex py-2 px-4 hover:bg-primary-700  transition-colors duration-200 ease-in-out  justify-center items-center text-nowrap ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
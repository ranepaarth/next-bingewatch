import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

const NextButton: React.FC<ButtonPrimaryProps> = ({ loading, children,...props }) => {
  return (
    <button
      className="h-12 bg-primary-600 text-lg font-bold rounded-sm py-1 hover:bg-primary-700  transition-colors duration-200 ease-in-out text-nowrap disabled:bg-primary-500/50 relative text-white w-full flex items-center justify-center"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className={`${"z-10 flex items-center justify-center"}`}>
          <Loader2 className={`animate-spin w-6 h-6`} />
        </span>
      ) : (
        <span className={`flex items-center ${loading ? "-z-20" : ""}`}>
          {children}
        </span>
      )}
    </button>
  );
};

export default NextButton;

"use client";
import React from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  label: string | undefined;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  callback?: () => void | Promise<void> | undefined;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  isDisabled?: boolean
}

const CustomButton = ({
  label = "",
  type = "button",
  callback,
  className,
  prefixIcon,
  suffixIcon,
  isDisabled = false
}: ButtonProps) => {
  const { pending: disabled } = useFormStatus();

  const handleButtonClick = async () => {
    if (typeof callback === "function") {
      await callback();
    }
  };
  return (
    <button
      disabled={disabled || isDisabled}
      type={type}
      className={`flex cursor-pointer items-center justify-center gap-1 rounded-[8px] bg-[#168733] px-4 py-2 font-semibold text-white ${(disabled || isDisabled) && "!cursor-not-allowed !bg-[#168733AB]"} ${className}`}
      onClick={handleButtonClick}
    >
      {!disabled && (
        <>
          {prefixIcon}
          {label}
          {suffixIcon}
        </>
      )}
      {disabled && (
        <svg className="h-5 w-5 animate-spin " viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default CustomButton;

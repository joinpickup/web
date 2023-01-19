import React from "react";

interface InputProps {
  error?: boolean;
  setError?: (v: boolean) => void;
  change: (v: string) => void;
  type?: string;
  placeholder: string;
  value: string;
  className?: string;
  children?: JSX.Element;
}

export default function Input({
  error,
  setError,
  change,
  placeholder,
  value,
  type,
  className,
}: InputProps) {
  return (
    <input
      className={
        className ??
        `${
          error ? "ring-2 ring-red-400" : ""
        } h-10 w-full rounded-lg bg-gray-600 px-4 font-bold text-gray-300 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-green-500`
      }
      type={type ?? "text"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        if (setError) {
          setError(false);
        }
        change(e.target.value);
      }}
    />
  );
}

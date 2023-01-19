import React from "react";

interface InputProps {
  change: (v: string) => void;
  children?: JSX.Element;
}

export default function Select({ change, children }: InputProps) {
  return (
    <select
      className="h-10 w-full rounded-lg bg-gray-600 px-4 font-bold placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-green-500"
      onChange={(e) => {
        change(e.target.value);
      }}
      {...children}
    ></select>
  );
}

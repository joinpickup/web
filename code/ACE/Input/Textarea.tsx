import React from "react";

interface InputProps {
  change: (v: string) => void;
  placeholder: string;
  value: string;
  rows: number;
  children?: JSX.Element;
}

export default function Textarea({
  change,
  rows,
  placeholder,
  value,
}: InputProps) {
  return (
    <textarea
      rows={rows}
      className="w-full rounded-lg border-0 bg-gray-600 p-2 px-4 font-bold placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        change(e.target.value);
      }}
    />
  );
}

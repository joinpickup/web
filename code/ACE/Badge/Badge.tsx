import React from "react";

interface BadgeProps {
  className?: string;
  text?: string;
}

export default function Badge({ className, text }: BadgeProps) {
  return (
    <>
      <div
        className={
          className ??
          "h-min w-min rounded bg-orange-400 px-2 text-xs font-semibold text-gray-600"
        }
      >
        {text}
      </div>
    </>
  );
}

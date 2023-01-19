import React from "react";

export enum ButtonType {
  DEFAULT,
  CONTAINED,
}

interface ButtonProps {
  click: VoidFunction;
  children?: JSX.Element;
  className?: string;
  type?: ButtonType;
}

export default function Button({
  click,
  children,
  className,
  type,
}: ButtonProps) {
  return (
    <>
      {type == undefined || type == null || type == ButtonType.DEFAULT ? (
        <button
          className={
            className ??
            "flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-600 p-2 hover:bg-gray-600"
          }
          onClick={() => {
            click();
          }}
        >
          {children}
        </button>
      ) : (
        <button
          className={
            className ??
            "flex w-full cursor-pointer items-center justify-center rounded-lg bg-green-500 p-2 hover:bg-green-600"
          }
          onClick={() => {
            click();
          }}
        >
          {children}
        </button>
      )}
    </>
  );
}

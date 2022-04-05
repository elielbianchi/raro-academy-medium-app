import React from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  buttonColor?: "red" | "blue" | "gray";
  action?: () => void;
};

let buttonStyle = "blue";

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  buttonColor,
  action,
}) => {
  const handleAction = async () => {
    if (action) {
      action();
    }
  };

  if (buttonColor === "red") {
    buttonStyle =
      "border-b-red-600 bg-red-500 hover:bg-red-400 active:border-b-red-400";
  }
  if (buttonColor === "blue") {
    buttonStyle =
      "border-b-blue-600 bg-blue-500 hover:bg-blue-400 active:border-b-blue-400";
  }
  if (buttonColor === "gray") {
    buttonStyle =
      "border-b-gray-600 bg-gray-500 hover:bg-gray-400 active:border-b-gray-400";
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleAction}
      className={`${buttonStyle} w-full ml-3 mr-3 mt-6 tracking-widest py-3 text-white font-bold active:translate-y-[0.125rem]`}
    >
      {children}
    </button>
  );
};

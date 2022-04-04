import React from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  typeExtend?: "back" | "delete";
  action?: () => void;
};

let buttonColor = "green";

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  typeExtend,
  action,
}) => {
  const handleAction = () => {
    if (action) {
      action();
    }
  };

  if (type === "submit") {
    buttonColor = "blue";
  }

  if (typeExtend === "back") {
    buttonColor = "gray";
  }

  if (typeExtend === "delete") {
    buttonColor = "red";
  }

  return (
      <button
        type={type}
        disabled={disabled}
        onClick={handleAction}
        className={`
        w-full mt-6 tracking-widest
        border-b-${buttonColor}-600 bg-${buttonColor}-500 py-3 text-white font-bold
        hover:bg-${buttonColor}-400 active:translate-y-[0.125rem] active:border-b-${buttonColor}-400
      `}
      >
        {children}
      </button>
  );
};

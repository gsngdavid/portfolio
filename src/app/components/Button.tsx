import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant } from "../types/enums";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

function Button({ variant, children }: Props) {
  let classes = "";
  switch (variant) {
    case ButtonVariant.SECONDARY:
      classes = "border-gray text-gray";
      break;
    default:
      classes = "border-primary";
  }
  return <button className={`border py-1 px-3 ${classes}`}>{children}</button>;
}

export default Button;

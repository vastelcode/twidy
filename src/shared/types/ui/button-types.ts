import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
}
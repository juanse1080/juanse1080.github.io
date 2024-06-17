import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";
import Typography from "./Typography";
import { ReactNode } from "react";

export type ButtonProps<Element extends HTMLElementKeys> = {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
} & IntrinsicElementsProps<Element>;

const Button = <Element extends HTMLElementKeys = "button">({
  component: Component = "button",
  children,
  className,
  variant = "contained",
  size = "medium",
  disabled,
  startAdornment,
  endAdornment,
  ...props
}: Readonly<ButtonProps<Element>>) => {
  return (
    <Typography
      component={Component}
      variant="button"
      disabled={disabled}
      className={merge(
        "rounded-full text-nowrap mb-0 inline-flex items-center gap-3 outline-none",
        {
          "cursor-not-allowed": disabled,
        },
        {
          "bg-gradient-to-r from-secondary-100 to-secondary-50 shadow-button":
            variant === "contained",
        },
        {
          "px-2 py-1": size === "small",
          "px-5 py-4": size === "medium",
        },
        !disabled && {
          "hover:bg-[rgba(144,202,249,0.08)] focus:bg-[rgba(144,202,249,0.08)] focus:outline-2 focus:outline-secondary-50":
            variant === "text",
          "hover:shadow-none focus:shadow-none focus:outline-2 focus:outline-offset-0 focus:outline-white":
            variant === "contained",
        },
        className
      )}
      {...(props as any)}
    >
      {startAdornment && startAdornment}
      {children}
      {endAdornment && endAdornment}
    </Typography>
  );
};

export default Button;

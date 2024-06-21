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

const Button = <Element extends HTMLElementKeys>({
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
        "cursor-pointer rounded-full text-nowrap mb-0 inline-flex items-center gap-3 outline-none",
        {
          "cursor-not-allowed": disabled,
        },
        {
          "bg-gradient shadow-button text-white font-thin":
            variant === "contained",
          "border border-solid border-divider outline-none":
            variant === "outlined",
        },
        {
          "px-1.5 py-1.5": size === "small",
          "px-3 py-2": size === "medium",
          "px-5 py-4": size === "large",
        },
        !disabled && {
          "hover:bg-[rgba(144,202,249,0.08)] focus:bg-[rgba(144,202,249,0.08)] focus:outline-2 focus:outline-secondary-50":
            variant === "text",
          "hover:shadow-none focus:shadow-none focus:outline-2 focus:outline-offset-0 focus:outline-white":
            variant === "contained",
          "hover:border-secondary-100 focus:border-secondary-100":
            variant === "outlined",
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

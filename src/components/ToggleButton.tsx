import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";
import Button, { ButtonProps } from "./Button";

export type ToggleButtonProps<Element extends HTMLElementKeys> = {
  value: string;
} & ButtonProps<Element>;

const ToggleButton = <Element extends HTMLElementKeys = "button">({
  component = "button",
  children,
  className,
  value,
  onClick: onClickProp,
  ...props
}: Readonly<ToggleButtonProps<Element>>) => {
  return (
    <Button
      aria-value={value}
      component={component}
      className={merge("", className)}
      {...(props as any)}
    >
      {children}
    </Button>
  );
};

export default ToggleButton;

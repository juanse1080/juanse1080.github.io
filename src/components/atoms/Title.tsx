import { Button, ButtonProps } from "components/atoms";
import { ReactNode } from "react";
import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";
import Typography, { TypographyProps } from "./Typography";

export type TitleProps<Element extends HTMLElementKeys> = {
  icon: ReactNode;
  buttonProps?: ButtonProps<"a">;
} & TypographyProps<Element>;

const Title = <Element extends HTMLElementKeys>({
  id,
  icon,
  children,
  className,
  buttonProps,
  ...props
}: Readonly<TitleProps<Element>>) => {
  return (
    <Typography
      className={merge("text-gradient", className)}
      {...(props as any)}
    >
      <div className="group flex items-center gap-3">
        {children}
        <Button
          size="small"
          component="a"
          variant="text"
          className="transition-colors text-transparent !outline-none group-hover:text-slate-300 hover:!text-white"
          {...buttonProps}
        >
          {icon}
        </Button>
      </div>
    </Typography>
  );
};

export default Title;

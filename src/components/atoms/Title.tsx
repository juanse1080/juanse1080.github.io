import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";
import Typography, { TypographyProps } from "./Typography";
import { Button, ButtonProps } from "components";
import { ReactNode } from "react";

export type TitleProps<Element extends HTMLElementKeys> = {
  href: string;
  icon: ReactNode;
  buttonProps?: ButtonProps<"a">;
} & TypographyProps<Element>;

const Title = <Element extends HTMLElementKeys>({
  className,
  children,
  href,
  icon,
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
          href={href}
          component="a"
          variant="text"
          className="transition-colors text-transparent !outline-none group-hover:text-slate-300 hover:!text-white"
          size="small"
          {...buttonProps}
        >
          {icon}
        </Button>
      </div>
    </Typography>
  );
};

export default Title;

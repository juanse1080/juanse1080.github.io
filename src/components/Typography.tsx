import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type TypographyProps<Element extends HTMLElementKeys> = {
  variant?: "h1" | "h2" | "h3" | "body" | "button";
  align?: "center" | "left" | "right" | "justify";
} & IntrinsicElementsProps<Element>;

const Typography = <Element extends HTMLElementKeys>({
  component: Component = "p",
  children,
  className,
  variant = "body",
  align = "left",
  ...props
}: Readonly<TypographyProps<Element>>) => {
  return (
    <Component
      className={merge(
        "mb-[0.35em]",
        {
          "text-8xl leading-[1.167]": variant === "h1",
          "text-6xl leading-[1.2]": variant === "h2",
          "text-[0.875rem] leading-[1.75] font-bold": variant === "button",
        },
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
          "text-justify": align === "justify",
        },
        className
      )}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export default Typography;

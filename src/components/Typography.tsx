import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type TypographyProps<Element extends HTMLElementKeys> = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h6"
    | "body"
    | "button"
    | "overline"
    | "caption";
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
          "text-[1.25rem] leading-[1.6] font-bold": variant === "h6",
          "text-[0.875rem] leading-[1.75] font-bold": variant === "button",
          "text-[0.875rem] leading-[1.75] font-bold uppercase":
            variant === "overline",
          "text-[0.875rem] leading-[1.43]": variant === "body",
          "text-[0.75rem] leading-[1.6]": variant === "caption",
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

import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type DividerProps<Element extends HTMLElementKeys> =
  IntrinsicElementsProps<Element>;

const Divider = <Element extends HTMLElementKeys>({
  component: Component = "hr",
  children,
  className,
  ...props
}: Readonly<DividerProps<Element>>) => {
  return (
    <Component
      className={merge("border-divider", className)}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export default Divider;

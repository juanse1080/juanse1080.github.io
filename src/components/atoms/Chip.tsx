import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type ChipProps<Element extends HTMLElementKeys> =
  {} & IntrinsicElementsProps<Element>;

const Chip = <Element extends HTMLElementKeys>({
  component: Component = "div",
  children,
  className,
  ...props
}: Readonly<ChipProps<Element>>) => {
  return (
    <Component
      className={merge(
        "inline rounded-full border border-divider border-solid px-3 py-2 bg-code",
        className
      )}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export default Chip;

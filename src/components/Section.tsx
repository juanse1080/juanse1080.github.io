import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";
import TitleSection from "./TitleSection";

export type SectionProps<Element extends HTMLElementKeys> = {
  id: string;
  title?: string;
} & Omit<IntrinsicElementsProps<Element>, "title" | "id">;

const Section = <Element extends HTMLElementKeys = "div">({
  component: Component = "div",
  children,
  className,
  id,
  title,
  ...props
}: Readonly<SectionProps<Element>>) => {
  return (
    <>
      <Component
        className={merge(
          "container px-3",
          "pb-8 sm:pb-12 md:pb-20 lg:pb-24",
          className
        )}
        {...(props as any)}
      >
        {title && <TitleSection id={id as string}>{title}</TitleSection>}
        {children}
      </Component>
      <hr className="border-divider" />
    </>
  );
};

export default Section;

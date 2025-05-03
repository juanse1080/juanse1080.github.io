import { Divider, TitleSection } from "components/atoms";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type SectionProps<Element extends HTMLElementKeys> = {
  id?: string;
  title?: string;
  ariaLabel?: string;
  hiddenDivider?: boolean;
} & Omit<IntrinsicElementsProps<Element>, "title" | "id">;

const Section = <Element extends HTMLElementKeys = "div">({
  id,
  title,
  children,
  ariaLabel,
  className,
  hiddenDivider,
  component: Component = "div",
  ...props
}: Readonly<SectionProps<Element>>) => {
  return (
    <>
      <Component
        id={id}
        className={merge(
          "container ",
          "p-3 sm:py-5",
          "md:py-14 lg:py-18",
          "xl:py-20 2xl:py-24",
          className
        )}
        {...(props as any)}
      >
        {title && (
          <TitleSection
            buttonProps={{
              href: `#${id}`,
              "aria-label": ariaLabel,
            }}
          >
            {title}
          </TitleSection>
        )}
        {children}
      </Component>
      {!hiddenDivider && <Divider />}
    </>
  );
};

export default Section;

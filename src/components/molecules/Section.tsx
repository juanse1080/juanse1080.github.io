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
          "container px-3",
          "pb-8 sm:pb-12 md:pb-20 lg:pb-24",
          { "pt-8 sm:pt-12 md:pt-20 lg:pt-24": !title },
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

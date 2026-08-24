import { Divider, TitleSection } from "components/atoms";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type SectionProps<Element extends HTMLElementKeys> = {
  id?: string;
  title?: string;
  ariaLabel?: string;
  hiddenDivider?: boolean;
  /** Marks this section as the last one on the page: stretches it to fill the
   * remaining viewport height instead of ending short with dead space below. */
  fillViewport?: boolean;
} & Omit<IntrinsicElementsProps<Element>, "title" | "id">;

const Section = <Element extends HTMLElementKeys = "div">({
  id,
  title,
  children,
  ariaLabel,
  className,
  hiddenDivider,
  fillViewport,
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
          "scroll-mt-[52px] sm:scroll-mt-[60px]",
          {
            "min-h-[calc(100dvh-52px)] sm:min-h-[calc(100dvh-60px)] flex flex-col justify-center":
              fillViewport,
          },
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

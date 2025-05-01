import { LinkIcon } from "components/icons";
import { Title, TitleProps } from "components/atoms";
import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";

export type TitleSectionProps<Element extends HTMLElementKeys> = Omit<
  TitleProps<Element>,
  "variant" | "component" | "id" | "href" | "icon" | "label"
>;

const TitleSection = <Element extends HTMLElementKeys>({
  className,
  children,
  ...props
}: Readonly<TitleSectionProps<Element>>) => {
  return (
    <Title
      component="h2"
      variant="overline"
      icon={<LinkIcon />}
      className={merge("pt-8 sm:pt-12 md:pt-20 lg:pt-24", className)}
      {...(props as any)}
    >
      {children}
    </Title>
  );
};

export default TitleSection;

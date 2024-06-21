import { Title, TitleProps, LinkIcon } from "components";
import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";

export type TitleSectionProps<Element extends HTMLElementKeys> = {
  id: string;
} & Omit<TitleProps<Element>, "variant" | "component" | "id" | "href">;

const TitleSection = <Element extends HTMLElementKeys>({
  id,
  className,
  children,
  ...props
}: Readonly<TitleSectionProps<Element>>) => {
  return (
    <Title
      id={id}
      component="h2"
      icon={<LinkIcon />}
      href={`#${id}`}
      variant="overline"
      className={merge("pt-8 sm:pt-12 md:pt-20 lg:pt-24", className)}
      {...(props as any)}
    >
      {children}
    </Title>
  );
};

export default TitleSection;

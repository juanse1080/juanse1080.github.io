import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";
import Typography, { TypographyProps } from "./Typography";

export type TitleSectionProps<Element extends HTMLElementKeys> = {
  id: string;
} & Omit<TypographyProps<Element>, "variant" | "component" | "id">;

const TitleSection = <Element extends HTMLElementKeys>({
  className,
  ...props
}: Readonly<TitleSectionProps<Element>>) => {
  return (
    <Typography
      {...(props as any)}
      className={merge("text-gradient pt-8 sm:pt-12 md:pt-20 lg:pt-24")}
      variant="overline"
      component="h2"
    />
  );
};

export default TitleSection;

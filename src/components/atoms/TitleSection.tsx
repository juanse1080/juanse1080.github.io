import { HTMLElementKeys } from "types";
import { merge } from "utils/clsx";
import Typography, { TypographyProps } from "./Typography";
import { Button, LinkIcon } from "components";

export type TitleSectionProps<Element extends HTMLElementKeys> = {
  id: string;
  href: string;
} & Omit<TypographyProps<Element>, "variant" | "component" | "id">;

const TitleSection = <Element extends HTMLElementKeys>({
  className,
  children,
  href,
  ...props
}: Readonly<TitleSectionProps<Element>>) => {
  return (
    <Typography
      {...(props as any)}
      className={merge("", "pt-8 sm:pt-12 md:pt-20 lg:pt-24")}
      variant="overline"
      component="h2"
    >
      <div className="group text-gradient flex items-center gap-3">
        {children}
        <Button
          href={href}
          component="a"
          variant="text"
          className="transition-colors text-transparent !outline-none group-hover:text-slate-300 hover:!text-white"
          size="small"
        >
          <LinkIcon />
        </Button>
      </div>
    </Typography>
  );
};

export default TitleSection;

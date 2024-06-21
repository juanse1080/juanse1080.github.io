"use client";

import { ContentCopyIcon, SendIcon } from "components/icons";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";
import { useScopedI18n } from "locales/client";
import { fontInconsolata } from "theme/fonts";
import { Button, Typography } from "components/atoms";

export type ContactFieldProps<Element extends HTMLElementKeys> = {
  value: string;
  type: "email" | "phone";
} & IntrinsicElementsProps<Element>;

const ContactField = <Element extends HTMLElementKeys>({
  component: Component = "code",
  children,
  className,
  value,
  type,
  ...props
}: Readonly<ContactFieldProps<Element>>) => {
  const tCommon = useScopedI18n("common");
  const link = type === "email" ? "mailto" : "tel";

  const onCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <Component
      className={merge(
        "border-solid border border-divider rounded-full px-3 py-2 pl-4 bg-code flex items-center gap-1 overflow-hidden",
        fontInconsolata.className,
        className
      )}
      {...(props as any)}
    >
      <Typography title={value} className="grow mb-0 mr-2">
        {value}
      </Typography>
      <Button
        title={tCommon("copy")}
        variant="outlined"
        size="small"
        onClick={onCopy}
      >
        <ContentCopyIcon height={20} width={20} />
      </Button>
      <Button
        component="a"
        variant="outlined"
        size="small"
        href={`${link}:${value}`}
      >
        <SendIcon height={20} width={20} />
      </Button>
    </Component>
  );
};

export default ContactField;

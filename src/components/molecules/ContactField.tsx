import { SendIcon } from "components/icons";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";
import { fontInconsolata } from "theme/fonts";
import { Button, Typography } from "components/atoms";
import CopyButton from "./CopyButton";

export type ContactFieldProps<Element extends HTMLElementKeys> = {
  value: string;
  type: "email" | "phone";
  copyLabel: string;
  sendLabel: string;
} & IntrinsicElementsProps<Element>;

const ContactField = <Element extends HTMLElementKeys>({
  component: Component = "code",
  className,
  value,
  type,
  copyLabel,
  sendLabel,
  ...props
}: Readonly<ContactFieldProps<Element>>) => {
  const link = type === "email" ? "mailto" : "tel";

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
      <CopyButton title={copyLabel} value={value} />
      <Button
        size="small"
        component="a"
        target="_blank"
        variant="outlined"
        href={`${link}:${value}`}
        aria-label={sendLabel}
      >
        <SendIcon height={20} width={20} />
      </Button>
    </Component>
  );
};

export default ContactField;

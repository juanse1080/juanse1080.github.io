import { SVGProps } from "react";

export type CodeIconProps = SVGProps<SVGSVGElement>;

const CodeIcon = (props: Readonly<CodeIconProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
    {...props}
  >
    <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
  </svg>
);
export default CodeIcon;

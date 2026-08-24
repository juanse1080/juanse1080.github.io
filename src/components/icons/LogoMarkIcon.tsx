import { SVGProps } from "react";

export type LogoMarkIconProps = SVGProps<SVGSVGElement>;

const LogoMarkIcon = (props: Readonly<LogoMarkIconProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="66 84 380 380"
    width="24px"
    fill="currentColor"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={26}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={170} cy={180} r={65} />
      <circle cx={342} cy={180} r={65} />
      <line x1={235} y1={180} x2={277} y2={180} />
    </g>
    <g fill="currentColor">
      <polygon points="220,285 292,285 277,322 235,322" />
      <polygon points="235,326 277,326 295,410 256,445 217,410" />
    </g>
  </svg>
);

export default LogoMarkIcon;

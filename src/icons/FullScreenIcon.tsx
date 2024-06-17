import { SVGProps } from "react";

export type FullScreenIconProps = SVGProps<SVGSVGElement>;

const FullScreenIcon = (props: Readonly<FullScreenIconProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
  </svg>
);
export default FullScreenIcon;

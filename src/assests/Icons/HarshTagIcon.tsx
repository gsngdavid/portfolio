import { SVGProps } from "react";

export default function HarshTagIcon({
  className,
  fill,
}: SVGProps<SVGElement>) {
  return (
    <svg
      className={className}
      fill={fill ? fill : "currentColor"}
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>tag</title>
      <path d="M26 14v-4h-4v-4h-4v4h-4v-4h-4v4h-4v4h4v4h-4v4h4v4h4v-4h4v4h4v-4h4v-4h-4v-4h4zM18 18h-4v-4h4v4z"></path>
    </svg>
  );
}
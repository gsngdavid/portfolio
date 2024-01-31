import { SVGProps } from "react";

export default function LinesLeaningIcon({
  className,
  fill,
}: SVGProps<SVGElement>) {
  return (
    <div>
      <svg
        width="800px"
        height="800px"  
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className={className}
      >
        <path
          d="M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l128-384zm70.9-41.7c-17.4-2.9-33.9 8.9-36.8 26.3l-64 384c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l64-384c2.9-17.4-8.9-33.9-26.3-36.8zM352 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z"
          fill={fill ? fill : "currentColor"}
        />
      </svg>
    </div>
  );
}

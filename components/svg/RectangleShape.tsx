import React from "react";

interface Props {
  className?: string;
}

export default function RectangleShape({ className }: Props) {
  return (
    <svg
      width="217"
      height="92"
      viewBox="0 0 217 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        d="M2.5 25.5L212.5 0L217 63.5L190.5 66L204.5 67L170 71L206.5 70L7 92H4L11.5 90V89L4 90L0 28L10 26.5L2.5 25.5Z"
        fill="black"
      />
    </svg>
  );
}

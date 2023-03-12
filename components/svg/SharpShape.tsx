import React from "react";

interface Props {
  className?: string;
}

export default function SharpShape({ className }: Props) {
  return (
    <svg
      width="356"
      height="344"
      viewBox="0 0 356 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        d="M255.651 173.593L189.548 104.315L226.183 43.7963L88.4027 0L0 173.593L88.4027 271.537L148.134 255.611L226.183 344V271.537L356 344L255.651 173.593Z"
        fill="black"
        fillOpacity="0.16"
      />
    </svg>
  );
}

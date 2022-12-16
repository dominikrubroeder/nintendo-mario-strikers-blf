import React from 'react';

type BallLightTopProps = {
  className?: string;
};

const BallLightTop: React.FC<BallLightTopProps> = ({ className }) => {
  return (
    <svg
      width="68"
      height="19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ''}
    >
      <path
        d="M13.5 9.50024C8.7 3.90024 2.83333 1.83358 0.5 1.50024C34.5 -3.69976 59.3333 10.6669 67.5 18.5002C45.1 10.5002 22.1667 9.16691 13.5 9.50024Z"
        fill="#FFF5F5"
      />
    </svg>
  );
};

export default BallLightTop;

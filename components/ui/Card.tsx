import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  const externalClassName = className ? className : '';

  return (
    <div
      className={`rounded-3xl bg-accent-soft p-4 themed:bg-accent-dark ${externalClassName}`}
    >
      {children}
    </div>
  );
};

export default Card;

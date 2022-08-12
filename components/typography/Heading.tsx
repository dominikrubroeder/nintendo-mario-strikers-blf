import React from 'react';

interface HeadingProps {
  /** h1 ... h6 or empty for rendering a div */
  as?: string;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ as, children, className }) => {
  const classNames = `${className ? className : ''}`;

  if (as === 'h1') return <h1 className={classNames}>{children}</h1>;
  if (as === 'h2') return <h2 className={classNames}>{children}</h2>;
  if (as === 'h3') return <h3 className={classNames}>{children}</h3>;
  if (as === 'h4') return <h4 className={classNames}>{children}</h4>;
  if (as === 'h5') return <h5 className={classNames}>{children}</h5>;
  if (as === 'h6') return <h6 className={classNames}>{children}</h6>;

  return <div className={`${className ? className : ''}`}>{children}</div>;
};

export default Heading;

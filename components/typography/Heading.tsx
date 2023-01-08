import React from 'react';

interface HeadingProps {
  /** Render one of those HTML typography tags */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  as = 'h1',
  children,
  className,
  onClick,
}) => {
  const classNames = `break-normal ${className ? className : ''}`;

  if (as === 'h1')
    return (
      <h1 className={classNames} onClick={onClick}>
        {children}
      </h1>
    );
  if (as === 'h2')
    return (
      <h2 className={classNames} onClick={onClick}>
        {children}
      </h2>
    );
  if (as === 'h3')
    return (
      <h3 className={classNames} onClick={onClick}>
        {children}
      </h3>
    );
  if (as === 'h4')
    return (
      <h4 className={classNames} onClick={onClick}>
        {children}
      </h4>
    );
  if (as === 'h5')
    return (
      <h5 className={classNames} onClick={onClick}>
        {children}
      </h5>
    );
  if (as === 'h6')
    return (
      <h6 className={classNames} onClick={onClick}>
        {children}
      </h6>
    );

  return (
    <div className={`${className ? className : ''}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Heading;

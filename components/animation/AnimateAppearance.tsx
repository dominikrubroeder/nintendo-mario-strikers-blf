import React from 'react';

type AnimateAppearanceProps = {
  animationType: 'fadeUp' | 'fadeInToRight' | 'fadeInToLeft' | 'fadeDown';
  /** Add delay to animation on page load in ms (miliseconds). */
  animationDelay?: '0' | '100' | '200' | '300' | '400' | '700';
  children: React.ReactNode;
  className?: string;
};

/**
 * This component is used to animate the appearance of an Element by using *vanilla CSS* animations.
 *
 * animationType prop tells the component which direction the animation should happen.
 *
 * Note: This animation can only be used for animate-on-page-load. So mainly for elements, which are in the initial viewport of the screen. The animation will start no matter if the element is currently within the viewport or not.
 */
const AnimateAppearance: React.FC<AnimateAppearanceProps> = ({
  animationType = 'fadeUp',
  animationDelay = '700',
  children,
  className,
}) => {
  const externalClassName = className ? className : '';

  return (
    <div
      className={`animate--${animationType} animation-delay-${animationDelay} ${externalClassName}`}
    >
      {children}
    </div>
  );
};

export default AnimateAppearance;

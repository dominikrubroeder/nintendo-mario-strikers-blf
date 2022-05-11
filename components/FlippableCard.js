import { useState, useEffect, useRef } from 'react';

const FlippableCard = (props) => {
  const [showFront, setShowFront] = useState(true);
  const cardFrontRef = useRef();

  useEffect(() => {
    cardFrontRef.current.classList.toggle('rotate-180');
    cardFrontRef.current.classList.toggle('transform-style-3d');
  }, [showFront]);

  return (
    <div
      className={`grid gap-4 max-w-md rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white border p-8 transition-all duration-700 ${props.className}`}
      onClick={() => setShowFront((previousState) => !previousState)}
      ref={cardFrontRef}
    >
      {props.flippable && (
        <h4
          className={`font-bold leading-[4.5rem] ${
            props.titleSize && props.titleSize
          }`}
        >
          {props.title}
        </h4>
      )}
      {!props.flippable && (
        <h4
          className={`transition-all font-bold ${
            showFront ? 'text-3xl leading-relaxed' : 'text-xl rotate-180'
          }`}
        >
          {props.title}
        </h4>
      )}
      <p
        className={`transition-all rotate-180 ${
          showFront
            ? 'opacity-0 translate-y-1/4'
            : 'opacity-100 translate-y-0 delay-[800ms]'
        }`}
      >
        {props.children}
      </p>
    </div>
  );
};

export default FlippableCard;

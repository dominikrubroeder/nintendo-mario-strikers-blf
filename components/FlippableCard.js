import { useState, useRef } from 'react';

const FlippableCard = (props) => {
  const [showFront, setShowFront] = useState(true);
  const cardFrontRef = useRef();

  return (
    <div
      className={`grid gap-4 relative max-w-md min-h-[35vh] rounded-xl mx-auto bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 transition-all duration-400 ${props.className}`}
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
            showFront ? 'text-3xl leading-relaxed' : 'text-xl'
          }`}
        >
          {props.title}
        </h4>
      )}
      <img
        src={props.imgSrc}
        className="absolute top-0 right-0 translate-x-1/2 w-full"
        alt="Mario"
      />
      <p
        className={`transition-all ${
          showFront
            ? 'opacity-0 translate-y-1/4'
            : 'opacity-100 translate-y-0 delay-400'
        }`}
      >
        {props.children}
      </p>
    </div>
  );
};

export default FlippableCard;

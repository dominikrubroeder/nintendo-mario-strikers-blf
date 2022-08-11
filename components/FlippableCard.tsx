import { useState, useRef, useEffect } from 'react';
import useIsOnScreen from '../hooks/useIsOnScreen';

const FlippableCard = (props) => {
  const [showFront, setShowFront] = useState(true);
  const overserableObject = useRef();
  const overserableObjectIsOnScreen = useIsOnScreen(overserableObject);

  useEffect(() => {
    if (overserableObjectIsOnScreen) {
      setShowFront(false);
    } else {
      setShowFront(true);
    }
  }, [overserableObjectIsOnScreen]);

  return (
    <div
      className={`flex flex-col justify-end gap-4 relative max-w-md min-h-[35vh] rounded-xl mx-auto text-white p-8 transition-all duration-400 ${
        props.className ? props.className : ''
      }`}
      onClick={() => setShowFront((previousState) => !previousState)}
      ref={overserableObject}
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
            showFront ? 'text-xl leading-relaxed' : ''
          }`}
        >
          {props.title}
        </h4>
      )}
      {props.imgSrc && (
        <img
          src={props.imgSrc}
          className="absolute top-0 right-0 translate-x-1/2 w-full"
          alt="Mario"
        />
      )}
      <p
        className={`transition-all ${
          showFront
            ? 'opacity-0 translate-y-1/4 invisible h-0'
            : 'opacity-100 translate-y-0 delay-400 visible h-auto'
        }`}
      >
        {props.children}
      </p>
    </div>
  );
};

export default FlippableCard;

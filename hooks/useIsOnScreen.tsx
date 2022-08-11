import { useEffect, useState } from 'react';

export default function useIsOnScreen(ref, props) {
  const [isIntersecting, setIntersecting] = useState(false);
  const thresholdValue = 0;

  let observer;

  // useEffect(() => {
  //   observer = new IntersectionObserver(([entry]) =>
  //     setIntersecting(entry.isIntersecting)
  //   );
  // }, []);

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: thresholdValue,
      }
    );
  }, []);

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

// https://www.youtube.com/watch?v=2IbRtjez6ag

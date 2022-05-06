import { useEffect, useState } from 'react';
import BaseButton from './base/BaseButton';
import TheCountdown from './TheCountdown';

export default function TheStickyBuyBar(props) {
  const [isVisible, setIsVisible] = useState(null);

  const { shouldBeVisible } = props;

  useEffect(() => {
    setIsVisible(shouldBeVisible);
  }, [shouldBeVisible]);

  return (
    <div
      className={`fixed bottom-0 w-full flex items-center justify-between p-4 bg-slate-100 transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1/2'
      }`}
    >
      <span>Mario Strikers: Battle League Football | Nintendo Switch</span>
      <div className="flex items-center gap-4">
        <TheCountdown />
        <BaseButton variant="contained">Kaufen</BaseButton>
      </div>
    </div>
  );
}

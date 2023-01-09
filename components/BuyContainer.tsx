import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../store/appContext';
import useIsInView from '../hooks/useIsInView';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';
import Button from './ui/Button';

interface BuyContainerProps {
  setShowStickyBuyBar: (shouldBeVisible: boolean) => void;
}

const BuyContainer: React.FC<BuyContainerProps> = ({ setShowStickyBuyBar }) => {
  const appCtx = useContext(AppContext);
  const buyBox = useRef<null | HTMLDivElement>(null);
  const buyBoxIsOnScreen = useIsInView(buyBox);

  // Buy box instructions on observer status changes
  useEffect(() => {
    if (buyBoxIsOnScreen) {
      setShowStickyBuyBar(false);
    } else {
      setShowStickyBuyBar(true);
    }
  }, [buyBoxIsOnScreen, setShowStickyBuyBar]);

  return (
    <SpringBounceWhenInView>
      <div
        className="flex justify-between gap-2 rounded-3xl bg-gray-100 p-8 themed:bg-accent-dark"
        ref={buyBox}
      >
        {appCtx?.buyable && (
          <p>
            Heute bestellen, Lieferung am
            <br />
            <b>Freitag, 10. Juni 2023</b>
          </p>
        )}
        <Button
          variant="contained"
          disabled={appCtx?.buyable ? false : true}
          href="/checkout"
          sound="coin"
          className="justify-center"
        >
          Jetzt vorbestellen
        </Button>
      </div>
    </SpringBounceWhenInView>
  );
};

export default BuyContainer;

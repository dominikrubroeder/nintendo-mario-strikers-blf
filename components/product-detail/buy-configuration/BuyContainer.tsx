import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../../../store/appContext';
import useIsOnScreen from '../../../hooks/useIsOnScreen';
import SpringBounceWhenInView from '../../animation/SpringBounceWhenInView';
import Button from '../../base/Button';

interface BuyContainerProps {
  setShowStickyBuyBar: (shouldBeVisible: boolean) => void;
}

const BuyContainer: React.FC<BuyContainerProps> = ({ setShowStickyBuyBar }) => {
  const appCtx = useContext(AppContext);
  const buyBox = useRef<null | HTMLDivElement>(null);
  const buyBoxIsOnScreen = useIsOnScreen(buyBox);

  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate();
  const month = today.getMonth();
  const day = today.getDay();

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
        className="grid gap-2 bg-gray-100 bg-accent themed:bg-accent-dark rounded-3xl p-8"
        ref={buyBox}
      >
        {appCtx?.buyable && (
          <p>
            Heute bestellen, Lieferung am
            <br />
            <b>Freitag, 10. Juni 2022</b>
          </p>
        )}
        <Button
          variant="contained"
          disabled={appCtx?.buyable ? false : true}
          href="/checkout"
          sound="coin"
        >
          Jetzt vorbestellen
        </Button>
      </div>
    </SpringBounceWhenInView>
  );
};

export default BuyContainer;

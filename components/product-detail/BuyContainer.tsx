import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../../store/appContext';
import useIsOnScreen from '../../hooks/useIsOnScreen';
import SpringBounceWhenInView from '../SpringBounceWhenInView';
import Button from '../Button';

interface BuyContainerProps {
  setShowStickyBuyBar: (shouldBeVisible: boolean) => void;
}

const BuyContainer: React.FC<BuyContainerProps> = ({ setShowStickyBuyBar }) => {
  const appCtx = useContext(AppContext);
  const buyBox = useRef<null | HTMLDivElement>(null);
  // @ts-ignore: Unreachable code error
  const buyBoxIsOnScreen = useIsOnScreen(buyBox);

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
            <b>Freitag, 10. Juni 2023</b>
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

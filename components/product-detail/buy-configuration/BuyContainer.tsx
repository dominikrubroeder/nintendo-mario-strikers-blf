import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../../../store/app-context';
import useIsOnScreen from '../../../hooks/useIsOnScreen';
import SpringBounceWhenInView from '../../animation/SpringBounceWhenInView';
import Button from '../../base/Button';

const BuyContainer = (props) => {
  const appCtx = useContext(AppContext);
  const buyBox = useRef();
  const buyBoxIsOnScreen = useIsOnScreen(buyBox);

  // Buy box instructions on observer status changes
  useEffect(() => {
    if (buyBoxIsOnScreen) {
      props.setShowStickyBuyBar(false);
    } else {
      props.setShowStickyBuyBar(true);
    }
  }, [buyBoxIsOnScreen]);

  return (
    <SpringBounceWhenInView>
      <div
        className="grid gap-2 bg-gray-100 bg-themed-dark rounded-3xl p-8"
        ref={buyBox}
      >
        {appCtx.buyable && (
          <p>
            Heute bestellen, Lieferung am
            <br />
            <b>Freitag, 10. Juni 2022</b>
          </p>
        )}
        <Button
          variant="contained"
          disabled={appCtx.buyable ? false : true}
          isLink
          href="/checkout"
          playSound
          sound="coin"
        >
          Jetzt vorbestellen
        </Button>
      </div>
    </SpringBounceWhenInView>
  );
};

export default BuyContainer;

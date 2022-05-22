import React, { useEffect, useRef } from 'react';
import useIsOnScreen from '../../hooks/useIsOnScreen';
import BaseButton from '../base/BaseButton';

const BuyContainer = (props) => {
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
    <div
      className="grid gap-2 bg-gray-100 bg-themed-dark rounded-3xl p-8"
      ref={buyBox}
    >
      {props.buyable && (
        <p>
          Heute bestellen, Lieferung am
          <br />
          <b>Freitag, 10. Juni 2022</b>
        </p>
      )}
      <BaseButton
        variant="contained"
        disabled={props.buyable ? false : true}
        isLink
        href="/checkout"
        playSound
        sound="coin"
      >
        Jetzt vorbestellen
      </BaseButton>
    </div>
  );
};

export default React.forwardRef(BuyContainer);

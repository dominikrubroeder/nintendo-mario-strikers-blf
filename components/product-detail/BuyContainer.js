import React, { forwardRef } from 'react';
import BaseButton from '../base/BaseButton';

const BuyContainer = (ref, props) => {
  return (
    <div
      className="grid gap-2 bg-gray-100 bg-themed-dark rounded-3xl p-8"
      ref={ref}
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

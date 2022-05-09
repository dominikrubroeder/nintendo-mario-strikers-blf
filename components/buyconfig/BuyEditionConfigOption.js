import { useState } from 'react';

export default function BuyEditionConfigOption(props) {
  return (
    <div
      className={`flex flex-wrap justify-between w-full border hover:border-gray-300 rounded-3xl p-8 ${
        props.selectedEdition === props.edition
          ? 'border-red-600 hover:border-red-600'
          : 'border-gray-200'
      }`}
      onClick={props.onClick}
    >
      <div className="grid gap-4">
        <h3 className="text-xl font-bold leading-5">
          Mario Strikers: Battle League Football
          <small className="text-red-600 font-normal block">
            {props.edition} Edition
          </small>
        </h3>
        {props.selectedEdition === props.edition && props.children}
      </div>
      <div>
        <h3 className="text-xl">{props.price}</h3>
        <p className="text-sm">(inkl. MwSt.)</p>
      </div>
    </div>
  );
}

import React from 'react';

export default function ButtonCompo({ effects }) {
  return (
    <div>
      <button
        className={`${effects} text-white text-lg px-7 py-3 cursor-pointer rounded-xl `}
      >
        Start free trial
      </button>
    </div>
  );
}

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount < 0) {
        alert('Cannot be less than Zero');
        return 0;
      }
      return newCount;
    });
  };

  return (
    <div className='mx-auto flex flex-col w-[900px] pt-20'>
      <div>
        <div className='flex justify-between items-center gap-10 pr-10 pb-5'>
          <h1 className='text-black text-5xl py-5'>Counter App</h1>
          <button
            onClick={handleReset}
            className=' w-fit h-fit bg-neutral-800 text-white px-10 py-4 text-lg cursor-pointer rounded-xl'
          >
            Reset
          </button>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <button
            onClick={handleIncrement}
            className='  w-fit h-fit bg-green-800 text-white px-10 py-4 text-lg cursor-pointer rounded-xl'
          >
            Increase
          </button>
          <div className='w-25 text-center'>
            <h1 className='text-black text-8xl py-5'>{count}</h1>
          </div>
          <button
            onClick={handleDecrement}
            className='  w-fit h-fit bg-red-800 text-white px-10 py-4 text-lg cursor-pointer rounded-xl'
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

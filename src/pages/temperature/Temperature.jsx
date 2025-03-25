import React, { useState } from 'react';

export default function Temperature() {
  const [celsius, setCelsius] = useState('');
  const [farenheit, setFarenheit] = useState('');

  const handleCelsius = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === '') {
      setFarenheit('');
      return;
    }

    const celsiusValue = parseFloat(value);
    if (!isNaN(celsiusValue)) {
      const toFarenheit = (9 / 5) * celsiusValue + 32;
      setFarenheit(toFarenheit.toFixed(1));
    }
  };

  const handleFarenheit = (e) => {
    const value = e.target.value;
    setFarenheit(value);

    if (value === '') {
      setCelsius('');
      return;
    }

    const farenValue = parseFloat(value);
    if (!isNaN(farenValue)) {
      const toCelsius = ((farenValue - 32) * 5) / 9;
      setCelsius(toCelsius.toFixed(1));
    }
  };
  return (
    <div className='mx-auto flex flex-col w-[900px] pt-20'>
      <div>
        <div className='flex justify-between items-center gap-10 pr-10 pb-5'>
          <h1 className='text-black text-5xl py-5'>Temperature</h1>
        </div>
        <div className='flex flex-col gap-15'>
          <div>
            <label htmlFor='c'>&deg;C:</label>
            <input
              id='celsius'
              onChange={handleCelsius}
              value={celsius}
              type='number'
              name='celsius'
              placeholder='In Celcius'
              required
            />
          </div>
          <div>
            <label htmlFor='f'>&deg;F:</label>
            <input
              id='farenheit'
              type='number'
              name='farenheit'
              onChange={handleFarenheit}
              value={farenheit}
              placeholder='In Fahrenheit'
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

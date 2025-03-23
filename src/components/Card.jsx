import React from 'react';

export default function Card({
  layout,
  textColor,
  body,
  bgColor,
  placeholder,
  img,
  src,
  title,
  position,
  detail,
  facebook,
  google,
  btnIco,
  button,
  btnEff,
}) {
  return (
    <div className={`absolute ${layout}`}>
      <div
        className={`w-fit h-fit ${body} flex flex-col justify-center shadow-xl rounded-2xl relative`}
      >
        <div className='h-fit w-[200px] place-items-center pt-5 space-y-2'>
          <div
            className={`w-fit h-fit p-3 rounded-full ${bgColor} object-cover overflow-hidden flex justify-center items-center`}
          >
            {placeholder}
            <img className={img} src={src} alt='' />
          </div>
          <div className=''>
            <p className={`${textColor} font-semibold text-base text-center`}>
              {title}
            </p>
            <p className='text-btnGray uppercase text-xs'>{position}</p>
          </div>
        </div>
        <div className='w-[200px] px-4 py-2'>
          <p className='text-center text-xs text-gray-400'>{detail}</p>
          <p className='flex gap-3 justify-center text-2xl cursor-pointer pt-5 text-blue-600'>
            {facebook}
            {google}
          </p>
        </div>
        <button
          className={`absolute ${btnEff}   px-5 py-2 w-fit h-fit rounded-sm text-xs font-semibold uppercase flex gap-2.5 items-center`}
        >
          {btnIco}
          {button}
        </button>
      </div>
    </div>
  );
}

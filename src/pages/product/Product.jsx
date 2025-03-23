import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { GiCubes } from 'react-icons/gi';
import { BsPalette2 } from 'react-icons/bs';

export default function Product() {
  return (
    <div className='grid grid-cols-(--my-grid) gap-10 bg-primary '>
      <div className='px-10 py-20 space-y-6'>
        <h1 className='text-black font-semibold'>
          Streamline your Tailwind CSS projects
        </h1>
        <h3 className='text-black'>
          Expertly made, responsive, accesible components in React and HTML
          ready to be used on your website or app. Just copy and paste them on
          your Tailwind CSS project.
        </h3>
        <div className='flex justify-start gap-6 items-center '>
          <h3 className='flex gap-2 items-center text-black'>
            <AiOutlineAppstoreAdd /> 42 Components
          </h3>
          <h3 className='flex gap-2 items-center text-black'>
            <GiCubes /> 952 Variations
          </h3>
          <h3 className='flex gap-2 items-center text-black'>
            <BsPalette2 /> 21 Colors
          </h3>
        </div>
        <button className=' bg-defaultGreen mt-5 text-white text-lg px-7 py-3 cursor-pointer rounded-xl hover:scale-103'>
          Explore Components{' '}
          <FontAwesomeIcon className='pl-2' icon={faLongArrowRight} />
        </button>
      </div>
      <div className='px-10 py-20 space-y-6'>
        <img src='/public/tailwind-css_ttun.svg' alt='' />
      </div>
    </div>
  );
}

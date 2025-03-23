import React from 'react';
import ButtonCompo from '../../components/ButtonCompo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
  return (
    <div className='grid grid-cols-(--my-grid)'>
      <div className='px-10 py-20 space-y-6 '>
        <div className='flex gap-5 bg-black w-fit pr-5 rounded-xl'>
          <div>
            <p className='bg-linear rounded-2xl px-4 py-1'>WE'RE HIRING</p>
          </div>
          <div className='py-1'>
            <p>
              Visit our careers page{' '}
              <FontAwesomeIcon className='pl-1 text-sm' icon={faChevronRight} />
            </p>
          </div>
        </div>
        <div>
          <h1>A better way to</h1>
          <h1 className='text-linear'>ship web apps</h1>
        </div>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum
          repellat inventore itaque consequuntur, quia, eum placeat ducimus quod
          facere ad sed voluptatibus.
        </h3>
        <div>
          <div className='grid grid-cols-[3.5fr_1fr] gap-2'>
            <input
              className='bg-primary  text-black text-lg font-semibold rounded-xl p-3'
              type='email'
              placeholder='Enter your email'
            />
            <ButtonCompo
              effects={
                'bg-linear font-semibold hover:scale-103 hover:animate-none animate-wiggle'
              }
            />
          </div>
          <div className='py-2'>
            <p className='text-lg'>
              Start your free 14-day trail, no credit card necessary. By
              providing your email, you agree to our{' '}
              <strong>terms or services</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className='items-center px-10 py-20'>
        <img src='/online-transactions_8chx.svg' alt='' />
      </div>
    </div>
  );
}

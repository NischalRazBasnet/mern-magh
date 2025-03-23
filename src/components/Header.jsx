import React from 'react';
import { NavLink } from 'react-router';
import { GiAtomicSlashes } from 'react-icons/gi';
import ButtonCompo from './ButtonCompo';

export default function Header() {
  return (
    <div className=' flex justify-between px-10 py-5 items-center bg-body text-primary sticky top-0  z-50'>
      <div className='flex gap-8 items-center'>
        <div>
          <div className='relative inline-block'>
            <svg width='0' height='0'>
              <defs>
                <linearGradient
                  id='gradientIcon'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='0%'
                >
                  <stop offset='0%' stopColor='#86e5ec' />
                  <stop offset='100%' stopColor='#378daa' />
                </linearGradient>
              </defs>
            </svg>
            <NavLink>
              <GiAtomicSlashes
                className='w-[60px] h-[60px]'
                style={{ fill: 'url(#gradientIcon)' }}
              />
            </NavLink>
          </div>
        </div>
        <div className='nav-text'>
          <NavLink to={'product'} className='hoverNav'>
            Product
          </NavLink>
          <NavLink to={'feature'} className='hoverNav'>
            Features
          </NavLink>
          <NavLink to={'#'} className='hoverNav'>
            MarketPlace
          </NavLink>
          <NavLink to={'#'} className='hoverNav'>
            Company
          </NavLink>
        </div>
      </div>

      <div className='nav-text items-center'>
        <NavLink className='hoverNav'>Log in</NavLink>
        <ButtonCompo effects={'bg-btnGray hover:bg-teritary'} />
      </div>
    </div>
  );
}

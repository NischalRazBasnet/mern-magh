import React from 'react';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <div className=' flex justify-between px-8 py-3 gap-2 items-baseline bg-body text-primary sticky top-0  z-50'>
      <div>
        <NavLink>
          <h2>Hooks</h2>
        </NavLink>
      </div>
      <div className='nav-text'>
        <NavLink
          to={'/'}
          className={(e) => (e.isActive ? 'text-secondary' : 'hoverNav')}
        >
          Notes
        </NavLink>
        <NavLink
          to={'counter'}
          className={(e) => (e.isActive ? 'text-secondary' : 'hoverNav')}
        >
          Counter
        </NavLink>
        <NavLink
          to={'temperature'}
          className={(e) => (e.isActive ? 'text-secondary' : 'hoverNav')}
        >
          Temperature
        </NavLink>
      </div>
    </div>
  );
}

import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';

export default function Menu() {
  return (
    <div className='bg-indigo-400 h-fit w-[550px] p-5 flex justify-between absolute -bottom-3 left-60'>
      <h1 className='text-sm uppercase'>Indigo Menu</h1>
      <div className='flex text-white gap-3'>
        <AiOutlineGlobal />
        <FaUser />
        <IoSettingsSharp />
      </div>
    </div>
  );
}

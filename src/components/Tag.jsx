import React from 'react';

export default function Tag({ tag }) {
  return (
    <button className='bg-white text-gray-700 text-xs px-5 py-2 shadow-xl rounded-2xl min-w-fit min-h-fit uppercase cursor-pointer'>
      {tag}
    </button>
  );
}

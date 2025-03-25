import { faker } from '@faker-js/faker';
import React, { useState } from 'react';
import {
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUsergroupDelete,
} from 'react-icons/ai';

export default function UserDetails() {
  const [users, setUsers] = useState([]);

  const handleUser = () => {
    const users = {
      id: faker.string.ulid(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    setUsers((prev) => [...prev, users]);
  };

  const handleRemove = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleRemoveAll = () => {
    setUsers([]);
  };

  return (
    <div className='mx-auto flex flex-col w-[950px] pt-20'>
      <div>
        <button
          onClick={handleUser}
          className=' text-body self-center cursor-pointer'
        >
          <AiOutlineUserAdd className='size-20' />
        </button>
        <div className='flex justify-between'>
          <h1 className='text-black text-4xl py-5 underline'>User Details</h1>
          <button
            onClick={handleRemoveAll}
            className=' text-red-700 self-center cursor-pointer'
          >
            <AiOutlineUsergroupDelete className='size-10' />
          </button>
        </div>

        <div className='shadow-2xl px-7 py-5 space-y-3'>
          {users.length === 0 && (
            <p className='text-black text-xl font-semibold'>
              Click on <AiOutlineUserAdd className='inline-block m-2 size-6' />{' '}
              to Add Users
            </p>
          )}
          {users.map((user) => (
            <div
              key={user.id}
              className='space-y-7 px-5 items-center grid gap-5 grid-cols-[1fr_3fr_1fr] '
            >
              <div>
                <img
                  className='size-20 rounded-full shadow-xl ring-2 ring-gray-200'
                  src={user.avatar}
                  alt=''
                />
              </div>
              <div className='flex flex-col self-baseline'>
                <p className='text-black text-xl font-semibold'>
                  {user.username}
                </p>
                <p>{user.email}</p>
              </div>
              <button
                onClick={() => handleRemove(user.id)}
                className=' w-fit text-red-600 text-lg py-2 self-start place-self-end cursor-pointer rounded-xl'
              >
                <AiOutlineUserDelete className='size-[35px] ' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

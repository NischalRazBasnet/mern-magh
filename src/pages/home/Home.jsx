import { faker } from '@faker-js/faker';
import React, { useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  const handleUser = () => {
    const user = {
      id: faker.string.ulid(),
      image: faker.image.avatar(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      reaction: faker.internet.emoji,
    };
    setUsers((prev) => [...prev, user]);
  };

  const handleDel = (index) => {
    setUsers((prev) => [...prev]);
    users.splice(index, 1);
  };

  console.log(users);
  return (
    <div>
      <button
        onClick={handleUser}
        className='bg-black text-white text-lg px-7 py-3 cursor-pointer rounded-xl'
      >
        Add
      </button>

      {users.map((user, i) => {
        return (
          <div key={user.id} className='space-y-5'>
            <div>
              <h2 className='text-black'>{user.username}</h2>
              {/* <p className='text-black'>{user.email}</p> */}
              <img className='size-[100px]' src={user.image} alt='' />
            </div>
            <button
              onClick={() => handleDel(i)}
              className='bg-pink-500 text-white text-lg px-7 py-3 cursor-pointer rounded-xl'
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

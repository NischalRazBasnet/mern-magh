import { faker } from '@faker-js/faker';
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { IoTrashBinOutline } from 'react-icons/io5';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const handleTask = () => {
    const task = {
      id: faker.string.ulid(),
      task: faker.lorem.sentences(1),
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
  };

  const handleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDel = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  console.log(tasks);
  return (
    <div className='mx-auto flex flex-col w-[900px] pt-20'>
      <div>
        <button
          onClick={handleTask}
          className=' text-green-500 self-center cursor-pointer'
        >
          <FaPlusCircle className='size-[50px]' />
        </button>
        <h1 className='text-black text-4xl py-5'>Notes</h1>
        <div className='shadow-2xl px-7 py-5 space-y-3'>
          {tasks.length === 0 && (
            <p className='text-black text-xl font-semibold'>
              No Task Yet Click on + to Add
            </p>
          )}
          {tasks.map((task) => (
            <div
              key={task.id}
              className='space-y-7 grid gap-5 grid-cols-[4fr_1fr] '
            >
              <div className='flex' onClick={() => handleComplete(task.id)}>
                <p
                  className={`text-black text-xl font-semibold ${
                    task.completed ? 'line-through opacity-50' : ''
                  }`}
                >
                  {task.task}
                </p>
              </div>
              <button
                onClick={() => handleDel(task.id)}
                className=' w-fit text-red-600 text-lg self-start place-self-end cursor-pointer rounded-xl'
              >
                <IoTrashBinOutline className='size-[35px] ' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

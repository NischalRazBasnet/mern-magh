import { faker } from '@faker-js/faker';
import React, { useState } from 'react';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const handleProducts = () => {
    const products = {
      id: faker.string.ulid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price({ symbol: '$' }),
      description: faker.commerce.productDescription(),
      image: 'https://avatars.githubusercontent.com/u/2414442',
    };
    setProducts((prev) => [...prev, products]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div>
      <div className='flex flex-row-reverse items-center justify-between bg-slate-800 px-20 py-3 w-full h-fit text-primary'>
        <button
          className='px-5 py-2 hover:bg-violet-500 rounded-2xl'
          onClick={handleProducts}
        >
          Add Product
        </button>
        <div>
          <input
            onChange={handleSearch}
            className='text-base text-center'
            type='text'
            value={search}
            placeholder='Search Here'
          />
        </div>
      </div>
      <div className='px-15 py-20 grid grid-cols-(--my-grid) gap-y-10 place-items-center'>
        {filteredProduct.map((product) => (
          <div
            className='flex flex-col gap-y-3.5 w-[350px] h-[650px] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-gray-300 hover:scale-101'
            key={product.id}
          >
            <div>
              <img
                className='w-[350px] h-[300px] object-cover'
                src={product.image}
              />
            </div>
            <div className='flex flex-col space-y-3.5 px-3 h-[300px]'>
              <div className='flex-1'>
                <h1 className=' text-3xl font-semibold tracking-wider'>
                  {product.title}
                </h1>
                <h3 className='underline underline-offset-2 font-semibold'>
                  Description:
                </h3>
                <h3 className='  text-lg'>{product.description}</h3>
              </div>
              <p>
                <strong>Price:</strong> <em>{product.price}</em>
              </p>
            </div>
          </div>
        ))}
      </div>
      {console.log(products)}
    </div>
  );
}

import React from 'react';

export default function RecipeCard({ recipe }) {
  return (
    <div
      id='recipe-container'
      className='h-[800px] w-[450px] shadow-2xl rounded-2xl overflow-hidden space-y-4'
    >
      <div id='food-img'>
        <img className='object-cover h-[300px] w-full' src={recipe.imageUrl} />
      </div>
      <div id='recipe-details' className='px-3 tracking-widest space-y-2'>
        <h1 className='text-3xl font-semibold'>{recipe.title}</h1>
        <p>{recipe.detail}</p>
        <h5 className='text-xl font-bold underline underline-offset-4'>
          Direction:
        </h5>
        <p>{recipe.recipe}</p>
        <h5 className='text-lg font-semibold underline underline-offset-4'>
          Ingredients:
        </h5>
        <p className='px-3'>
          {recipe.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </p>
      </div>
    </div>
  );
}

import React from 'react';

function RecipeItem({ recipe }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={recipe.image} alt={recipe.label} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{recipe.label}</h3>
      <p className="text-sm text-gray-500">Calories: {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
        View Recipe
      </a>
    </div>
  );
}

export default RecipeItem;

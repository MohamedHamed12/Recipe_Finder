import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.recipe.uri} recipe={recipe.recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
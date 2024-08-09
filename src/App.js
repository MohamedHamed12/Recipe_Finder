// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import RecipeSearch from './components/RecipeSearch';
// import RecipeList from './components/RecipeList';
// function App() {
//   return (
//     <div className="container mx-auto ">
//      <Header/>
//      <RecipeSearch/>
//      <RecipeList/>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Header from './components/Header';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const searchRecipes = async (query) => {
    const appId = 'YOUR_APP_ID'; // Replace with your Edamam application ID
    const appKey = 'YOUR_API_KEY'; // Replace with your Edamam API key

    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
      );

      if (!response.ok) {
        // Generate and use fake recipes data
        const fakeRecipes = generateFakeRecipes(query);
        setRecipes(fakeRecipes);
        setError(null);
        return;
      }

      const data = await response.json();
      setRecipes(data.hits);
      setError(null);
    } catch (err) {
      // Generate and use fake recipes data if there's an error
      const fakeRecipes = generateFakeRecipes(query);
      setRecipes(fakeRecipes);
      setError('Something went wrong, showing fake data');
    }
  };

  const generateFakeRecipes = (query) => {
    console.log('query');
    return Array.from({ length: 20 }).map((_, index) => ({
      recipe: {
        label: `Fake Recipe ${index + 1} for ${query}`,
        image: 'https://avatars.githubusercontent.com/u/71311681?s=200&v=4',
        calories: Math.floor(Math.random() * 500),
        url: '#',
      },
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <RecipeSearch searchRecipes={searchRecipes} />
      {error && <p className="text-center text-red-500">{error}</p>}
      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;

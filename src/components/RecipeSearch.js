import React, { useState } from "react";

function RecipeSearch({searchRecipes}){
    const [query,setQuery]= useState(''); 
    const handleSubmit =(e)=>{
        e.preventDefault();
    if (query.trim()) {
      searchRecipes(query);
      setQuery('');
    }
    }

    return (
        <form onSubmit={handleSubmit} className="my-4 flex justify-center">
                  <input
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="p-2 border rounded flex-grow max-w-xs"
        placeholder="Search for recipes..."
      />
      <button type="submit" className="bg-green-600 text-white rounded-r p-2">
        Search
      </button>
        </form>
    );
}
export default RecipeSearch
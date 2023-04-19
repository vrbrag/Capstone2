import React, { useEffect, useState } from 'react'
import KitchenApi from '../api'
import RecipeCard from './RecipeCard';

function RecipeList() {
   console.debug("RecipeList")

   const [recipes, setRecipes] = useState([]);

   async function getItems() {
      let r = await KitchenApi.getAllUsers();
      console.log(r)
      setRecipes(r)
   };

   useEffect(() => {
      getItems();
   }, []);

   return (
      <div className="RecipeList">
         <h1 className="list-title">Recipes</h1>
         <div>
            {recipes.map(r => (
               <RecipeCard
                  key={r.id}
                  id={r.id}
                  // title={r.title}
                  // cuisine={r.cuisine}
                  // ingredients={r.ingredients}
                  // instructions={r.instructions}
                  // avgCal={r.avgCal}
                  // notes={r.notes}
                  username={r.username}
               />
            ))}
         </div>
      </div>
   )
};

export default RecipeList;
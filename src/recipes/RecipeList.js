import React, { useEffect, useState } from 'react'
import KitchenApi from '../api'
import RecipeCard from './RecipeCard';
import SearchForm from '../SearchForm';

function RecipeList() {
   console.debug("RecipeList")

   const [recipes, setRecipes] = useState([]);

   async function getCuisine(cuisine) {
      let r = await KitchenApi.getAllRecipesCuisine(cuisine);
      console.log(r)
      setRecipes(r)
   };
   async function getTitle(title) {
      let r = await KitchenApi.getAllRecipesTitle(title);
      console.log(r)
      setRecipes(r)
   };
   async function getIngredient(ingredients) {
      let r = await KitchenApi.getAllRecipesIngredient(ingredients);
      console.log(r)
      setRecipes(r)
   };

   useEffect(() => {
      getCuisine();
      getTitle();
      getIngredient();
   }, []);

   return (
      <div className="RecipeList">
         <h1 className="list-title">all recipes</h1>
         <div className="searchbars">
            {/* SearchForm */}
            <div>
               <SearchForm placeholder="search by cuisine..." search={getCuisine} />
            </div>
            <div>
               <SearchForm placeholder="search by title..." search={getTitle} />
            </div>
            <div>
               <SearchForm placeholder="search by ingredient..." search={getIngredient} />
            </div>
         </div>

         <div className="RecipeList-list">
            {recipes.map(r => (
               <RecipeCard
                  key={r.id}
                  id={r.id}
                  title={r.title}
                  cuisine={r.cuisine}
                  ingredients={r.ingredients}
                  instructions={r.instructions}
                  avgCal={r.avgCal}
                  notes={r.notes}
                  username={r.username}
               />
            ))}
         </div>
      </div>
   )
};

export default RecipeList;
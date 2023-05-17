import React, { useEffect, useState, useContext } from 'react';
import KitchenApi from '../api';
import UserContext from '../auth/UserContext';
import RecipeCard from './RecipeCard';
import SearchForm from '../SearchForm';

function MyRecipesList() {

   const { currentUser } = useContext(UserContext);
   const [recipes, setRecipes] = useState([]);

   async function getRecipeIds(currentUser) {
      let r = await KitchenApi.getCurrentUser(currentUser.username)

      let ids = r.recipes
      let list = []

      await Promise.all(
         ids.map(async (id) => {
            const recipes = await KitchenApi.getRecipe(id);
            list.push(recipes)
         }))
      setRecipes(list)
   }

   console.debug("MyRecipesList", "my-recipes", recipes)

   useEffect(() => {
      getRecipeIds(currentUser);
   }, []);

   return (
      <div className="MyRecipeList">
         <h1 className="list-title">my recipes</h1>
         <div className="MyRecipeList-list">
            {recipes.length ? recipes.map(r => (
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
            )) : (
               <p>No recipes created yet!</p>
            )}
         </div>
      </div>
   )
};

export default MyRecipesList;
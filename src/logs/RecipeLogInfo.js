import React, { useEffect, useState, useContext } from 'react';
import KitchenApi from '../api';
import UserContext from '../auth/UserContext';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RecipeLogInfo({ id }) {

   const { currentUser } = useContext(UserContext);
   const [recipe, setRecipe] = useState([]);

   // console.log("RecipeLogInfo", "id type", typeof (id))

   async function getRecipeInfo(id) {
      let r = await KitchenApi.getRecipe(id)
      setRecipe(r)
   }

   // console.debug("Recipe-logged", "logged", recipe)

   useEffect(() => {
      getRecipeInfo(id);
   }, []);

   return (
      <div>
         <Link to={`/recipe/${recipe.id}`}>
            <CardTitle className="card-title">{recipe.title}</CardTitle>
         </Link>
         <CardSubtitle>{recipe.avgCal} cal</CardSubtitle>
      </div>
   )
}

export default RecipeLogInfo;
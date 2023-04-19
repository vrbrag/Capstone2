import React from 'react'

function RecipeCard(recipe) {
   const { title, cuisine, ingredients } = recipe;
   const listItems = ingredients.map(ingredient => (
      <li>{ingredient}</li>
   ))
   return (
      <div>
         <h2>{title}</h2>
         <h3>{cuisine}</h3>
         <ul>
            {listItems}
         </ul>
      </div>
   )
};

export default RecipeCard;
import React from 'react'

function RecipeCard(recipe) {
   const { title, cuisine, ingredients, avgCal } = recipe;
   const listItems = ingredients.map(ingredient => (
      <li>{ingredient}</li>
   ))
   return (
      <div>
         <h2>{title}</h2>
         <p>Cuisine: {cuisine}</p>
         <p>Avg. Cal: {avgCal}</p>
         <p>Ingredients:
            <ul>
               {listItems}
            </ul>
         </p>
      </div>
   )
};

export default RecipeCard;
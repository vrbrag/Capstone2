import React from 'react'

function ListItem(recipe) {
   return <li>{recipe.value}</li>;
};

function RecipeCard(recipe) {
   const { title, cuisine, ingredients, instructions, avgCal } = recipe;

   const listItems = ingredients.map((ingredient) =>
      <ListItem key={ingredient.toString()} value={ingredient} />
   );

   return (
      <div>
         <h2>{title}</h2>
         <p>Cuisine: {cuisine}</p>
         <p>Avg. Cal: {avgCal}</p>
         Ingredients:
         <ul>
            {listItems}
         </ul>
         <p>Instructions: {instructions}</p>
      </div>
   )
};

export default RecipeCard;
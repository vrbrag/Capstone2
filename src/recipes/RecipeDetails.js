import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Card, CardTitle, Button } from 'reactstrap';
import KitchenApi from '../api';

function RecipeDetails() {
   const { id } = useParams()
   const [recipe, setRecipe] = useState([]);

   async function getRecipe() {
      let details = await KitchenApi.getRecipe(id)
      console.log(`${id} Recipe Details`)
      setRecipe(details)
   }

   useEffect(() => {
      getRecipe()
   }, [id])

   const { title, cuisine, ingredients, instructions, avg_cal, notes } = recipe

   // remove html tags on instructions 
   const regex = /(<([^>]+)>)/ig;
   let result = instructions;


   return (
      <div className="RecipeDetails col-md-8 offset-md-2">
         {/* <Button
            className="btn"
            outline color="warning"
            size="sm">
            Back
         </Button> */}
         <Card className="card-body">
            <CardTitle className="card-title">
               {title}
            </CardTitle>
            <h5>{cuisine}</h5>
            <ul>
               Ingredients: {ingredients}
            </ul>
            {instructions ? (<p>Instructions: {result = result.replace(regex, '')}</p>)
               : (
                  ''
               )}

            {avg_cal ? (<p>Average Calories: {avg_cal}</p>)
               : (
                  ''
               )}

            {notes ? (<p>Notes: {notes}</p>)
               : (
                  ''
               )}

            <Button
               className="btn"
               outline color="warning"
               size="sm">
               Find Similar Recipes
            </Button>
         </Card>

      </div >

   )
};

export default RecipeDetails;
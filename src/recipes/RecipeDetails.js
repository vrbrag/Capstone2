import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardTitle, Button } from 'reactstrap';
import KitchenApi from '../api';

function RecipeDetails() {
   const { id } = useParams()
   const [recipe, setRecipe] = useState([]);
   const history = useHistory();

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

   const goBack = () => {
      history.goBack()
   };

   return (
      <div className="RecipeDetails col-md-8 offset-md-2">

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
            <Link to={`/search-variations/${id}`}>
               <Button
                  className="btn"
                  outline color="warning"
                  size="sm"
               >
                  Find Similar Recipes
               </Button>
            </Link>
         </Card>

         <Button
            className="btn"
            outline color="warning"
            size="sm"
            onClick={goBack}
         >
            Back
         </Button>

      </div >

   )
};

export default RecipeDetails;
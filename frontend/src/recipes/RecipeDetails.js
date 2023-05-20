import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardTitle, Button } from 'reactstrap';
import KitchenApi from '../api';
import { Table } from 'reactstrap';

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

   const { title, cuisine, ingredients, instructions, avgCal, notes } = recipe

   // remove html tags on instructions 
   const regex = /(<([^>]+)>)/ig;
   let result = instructions;

   const goBack = () => {
      history.goBack()
   };

   return (
      <div className="RecipeDetails col-md-8 offset-md-2">

         <Card className="card-body">
            <CardTitle className="card-detail-title">
               {title}
            </CardTitle>
            <div>
               <Table>
                  <thead>
                     <tr>
                        <th>

                        </th>

                     </tr>
                  </thead>
                  <tbody className="recipecard-body">
                     {cuisine ? (<tr>
                        <th scope="row">
                           Cuisine
                        </th>
                        <td>
                           {cuisine}
                        </td>
                     </tr>)
                        : (
                           ''
                        )}

                     <tr>
                        <th scope="row">
                           Ingredients
                        </th>
                        <td>
                           <ul>
                              {ingredients ? ingredients.map((ingredient, index) => (
                                 <li key={index}>{ingredient} </li>
                              ))
                                 : ('')
                              }
                           </ul>
                        </td>
                     </tr>
                     {instructions ? (<tr>
                        <th scope="row">
                           Instructions
                        </th>
                        <td>
                           {result = result.replace(regex, '')}
                        </td>
                     </tr>)
                        : (
                           ''
                        )}
                     {notes ? (<tr>
                        <th scope="row">
                           Notes
                        </th>
                        <td>
                           {notes}
                        </td>
                     </tr>)
                        : (
                           ''
                        )}
                     {avgCal ? (<tr>
                        <th scope="row">
                           Avg Cal
                        </th>
                        <td>
                           {avgCal} cal
                        </td>
                     </tr>)
                        : (
                           ''
                        )}
                     <tr>

                     </tr>
                  </tbody>
               </Table>
            </div>

         </Card>

         <Button
            className="btn"
            outline color="warning"
            size="sm"
            onClick={goBack}
         >
            Back
         </Button>

         <Link to={`/search-variations/${id}`}>
            <Button
               className="btn"
               outline color="warning"
               size="sm"
            >
               Find Similar Recipes
            </Button>
         </Link>


      </div >

   )
};

export default RecipeDetails;
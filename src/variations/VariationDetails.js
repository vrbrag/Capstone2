import React, { useState, useEffect } from 'react';
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Card, CardTitle, ButtonGroup, Button } from 'reactstrap';
import KitchenApi from '../api';
import { Table } from 'reactstrap';

function VariationDetails() {
   const { id } = useParams();
   const [recipe, setRecipe] = useState([]);
   const { currentUser } = useContext(UserContext);


   const { hasFavoritedRecipe, favoriteThisVariation } = useContext(UserContext);
   const [favorited, setFavorited] = useState();

   const history = useHistory();

   // setRecipe State
   async function getRecipe() {
      let details = await KitchenApi.getVarRecipe(id)
      console.log(`${id} Variation Details`)
      setRecipe(details)
   }

   useEffect(() => {
      getRecipe()
   }, [id]);

   // const { title, cuisine, ingredients, instructions, avg_cal } = recipe;


   // Favorite
   useEffect(function favoritedStatus() {
      setFavorited(hasFavoritedRecipe(recipe.id))

   }, [recipe.id, hasFavoritedRecipe]);

   async function handleFavorite(e) {
      if (hasFavoritedRecipe(recipe.id)) return
      console.debug('handleFavorite')
      favoriteThisVariation(recipe)
      setFavorited(true)
   };


   async function handleLogRecipe(e) {
      const username = currentUser.username;
      const data = { ...recipe, username }
      await KitchenApi.logVarRecipe(data);
      console.debug('handleLogRecipe', recipe.id)
      history.push("/logs");
   }


   // remove html tags on instructions 
   const regex = /(<([^>]+)>)/ig;
   let result = recipe.instructions;

   const goBack = () => {
      history.goBack()
   };

   return (
      <div className="VariationDetails col-md-8 offset-md-2">

         <Card className="card-body">
            <CardTitle className="card-title">
               {recipe.title}
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
                     {recipe.cuisine ? (<tr>
                        <th scope="row">
                           Cuisine
                        </th>
                        <td>
                           {recipe.cuisine}
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
                           {recipe.ingredients}
                        </td>
                     </tr>
                     {recipe.instructions ? (<tr>
                        <th scope="row">
                           Instructions:
                        </th>
                        <td>
                           {result = result.replace(regex, '')}
                        </td>
                     </tr>)
                        : (
                           ''
                        )}

                     {recipe.avg_cal ? (<tr>
                        <th scope="row">
                           Avg Cal:
                        </th>
                        <td>
                           {recipe.avg_cal} cal
                        </td>
                     </tr>)
                        : (
                           ''
                        )}
                     <tr>
                        <td>

                        </td>
                        <td className="fav-log-btns">
                           <ButtonGroup>
                              <Button
                                 // className="btn btn-warning .col-sm .col-sm-offset-1"
                                 className="btn"
                                 outline
                                 // color="warning"
                                 size="sm"
                                 onClick={handleFavorite}
                                 disabled={favorited}
                              >
                                 {favorited ? "favorited" : "favorite"}
                              </Button>{' '}
                              <Button
                                 // className="btn btn-warning font-weight-bold mr-3"
                                 className="btn"
                                 outline
                                 // color="warning"
                                 size="sm"
                                 onClick={handleLogRecipe}
                              >
                                 log
                              </Button>
                           </ButtonGroup>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>

            {/* <CardTitle className="card-title">
               {recipe.title}
            </CardTitle>
            <h5>{recipe.cuisine}</h5>
            <ul>
               Ingredients: {recipe.ingredients}
            </ul>
            {recipe.instructions ? (<p>Instructions: {result = result.replace(regex, '')}</p>)
               : (
                  ''
               )}

            {recipe.avg_cal ? (<p>Average Calories: {recipe.avg_cal}</p>)
               : (
                  ''
               )}

            <ButtonGroup>
               <Button
                  // className="btn btn-warning .col-sm .col-sm-offset-1"
                  className="btn"
                  outline
                  // color="warning"
                  size="sm"
                  onClick={handleFavorite}
                  disabled={favorited}
               >
                  {favorited ? "favorited" : "favorite"}
               </Button>{' '}
               <Button
                  // className="btn btn-warning font-weight-bold mr-3"
                  className="btn"
                  outline
                  // color="warning"
                  size="sm"
                  onClick={handleLogRecipe}
               >
                  log
               </Button>
            </ButtonGroup> */}

         </Card>

         <Button
            className="btn"
            outline color="warning"
            size="sm"
            onClick={goBack}
         >
            Back
         </Button>

      </div>
   )
}

export default VariationDetails;
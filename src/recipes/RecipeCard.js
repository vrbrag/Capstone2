import React, { useEffect, useState } from 'react'
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { Card, CardTitle, Button, ButtonGroup } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import KitchenApi from '../api';
import { Table } from 'reactstrap';


function RecipeCard({ id, title, cuisine, avgCal }) {

   const { currentUser } = useContext(UserContext);
   const { hasFavoritedRecipe, favoriteThisRecipe } = useContext(UserContext);
   const [favorited, setFavorited] = useState();
   const history = useHistory();

   useEffect(function favoritedStatus() {
      setFavorited(hasFavoritedRecipe(id))

   }, [id, hasFavoritedRecipe])

   async function handleFavorite(e) {
      if (hasFavoritedRecipe(id)) return
      console.debug('handleFavorite')
      favoriteThisRecipe(id)
      setFavorited(true)
   }

   async function handleLogRecipe(e) {
      let username = currentUser.username
      let recipeId = id

      await KitchenApi.logRecipe({ username, recipeId });
      console.debug('handleLogRecipe', id)
      history.push("/logs");
   }

   return (
      <div className="RecipeCard">
         <Card className="card-body">
            <div>
               <Table>
                  <thead>
                     <tr>
                        <th>
                           <Link to={`/recipe/${id}`}>

                              <CardTitle className="card-title">{title}</CardTitle>


                           </Link>
                        </th>
                        <td>

                        </td>
                        <td className="fav-log-btns">
                           <ButtonGroup>
                              <Button
                                 className="btn"
                                 outline
                                 size="sm"
                                 onClick={handleFavorite}
                                 disabled={favorited}
                              >
                                 {favorited ? "favorited" : "favorite"}
                              </Button>{' '}
                              <Button
                                 className="btn"
                                 outline
                                 size="sm"
                                 onClick={handleLogRecipe}
                              >
                                 log
                              </Button>
                           </ButtonGroup>

                        </td>
                     </tr>
                  </thead>
                  <tbody>
                     {cuisine ? (<tr className="recipecard-body">
                        <th scope="row">
                           <b>Cuisine:</b>   <i>{cuisine}</i>
                        </th>
                        <td>

                        </td>
                        <td>

                        </td>
                     </tr>)
                        : ""}
                     <tr className="recipecard-body">
                        <th scope="row">
                           <b>Avg Cal:</b>  <i>{avgCal} cal</i>
                        </th>
                        <td>

                        </td>
                        <td>

                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </Card>
      </div>
   )
};

export default RecipeCard;
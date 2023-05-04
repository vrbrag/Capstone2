import React, { useEffect, useState } from 'react'
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { Card, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import KitchenApi from '../api';



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
            <Link to={`/recipe/${id}`}>
               <CardTitle className="card-title">{title}</CardTitle>
            </Link>
            <CardSubtitle>{cuisine}</CardSubtitle>
            <CardSubtitle>{avgCal} cal</CardSubtitle>

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
         </Card>
      </div>
   )
};

export default RecipeCard;
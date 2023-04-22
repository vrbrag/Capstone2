import React, { useEffect, useState } from 'react'
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { Card, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';



function RecipeCard({ id, title, cuisine, avgCal }) {

   const { hasFavoritedRecipe, favoriteThisRecipe } = useContext(UserContext)
   const [favorited, setFavorited] = useState()


   useEffect(function favoritedStatus() {
      setFavorited(hasFavoritedRecipe(id))

   }, [id, hasFavoritedRecipe])

   async function handleFavorite(e) {
      if (hasFavoritedRecipe(id)) return
      console.debug('handleFavorite')
      favoriteThisRecipe(id)
      setFavorited(true)
   }


   return (
      <div className="RecipeCard">
         <Card className="card-body">
            <Link to={`/recipe/${id}`}>
               <CardTitle className="card-title">{title}</CardTitle>
            </Link>
            <CardSubtitle>Cuisine: {cuisine}</CardSubtitle>
            <CardSubtitle>Cals: {avgCal}</CardSubtitle>

            <ButtonGroup>
               <Button
                  // className="btn btn-warning .col-sm .col-sm-offset-1"
                  className="btn"
                  outline color="warning"
                  size="sm"
                  onClick={handleFavorite}
                  disabled={favorited}
               >
                  {favorited ? "Favorited" : "Favorite"}
               </Button>{' '}
               <Button
                  // className="btn btn-warning font-weight-bold mr-3"
                  className="btn"
                  outline color="warning"
                  size="sm"
               >
                  Log
               </Button>
            </ButtonGroup>
         </Card>
      </div>
   )
};

export default RecipeCard;
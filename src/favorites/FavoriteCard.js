import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button, ButtonGroup } from 'reactstrap';
import UserContext from '../auth/UserContext';

function FavoriteCard({ id, title }) {

   const { hasFavoritedRecipe, unFavoriteRecipe } = useContext(UserContext)
   const [saved, setSaved] = useState()


   useEffect(function savedStatus() {
      setSaved(hasFavoritedRecipe(id))
   }, [id, hasFavoritedRecipe])

   async function handleUnFavorite(e) {
      // if (!hasFavoritedRecipe(id)) return
      console.debug('handleUnFavorite')
      unFavoriteRecipe(id)
      // console.log(hasFavoritedRecipe(id))
   }

   return (
      <div className="FavoriteCard">
         {saved}
         <Card className="card-body">
            <Link className="FavoriteCard" to={`/recipe/${id}`}>
               <CardTitle className="card-title">{title}</CardTitle>
            </Link>
            <ButtonGroup>
               <Button
                  // className="btn btn-success font-weight-bold mr-3"
                  className="btn"
                  outline color="warning"
                  size="sm"
                  onClick={handleUnFavorite}>Unfavorite
               </Button>
               <Button
                  // className="btn btn-success font-weight-bold mr-3"
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

export default FavoriteCard;
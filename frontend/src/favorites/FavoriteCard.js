import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button, ButtonGroup } from 'reactstrap';
import UserContext from '../auth/UserContext';
import { Table } from 'reactstrap';

function FavoriteCard({ id, title }) {

   const { hasFavoritedRecipe, unFavoriteRecipe, favoriteThisRecipe } = useContext(UserContext)
   const [saved, setSaved] = useState()


   useEffect(function savedStatus() {
      setSaved(hasFavoritedRecipe(id))
   }, [id, hasFavoritedRecipe])

   async function handleUnFavorite(e) {
      console.debug('handleUnFavorite')
      unFavoriteRecipe(id)
      setSaved(false)
   }

   async function handleFavorite(e) {
      if (hasFavoritedRecipe(id)) return
      console.debug('handleFavorite')
      favoriteThisRecipe(id)
      setSaved(true)
   }

   return (
      <div className="FavoriteCard">
         <Card className="card-body">
            <div>
               <Table>
                  <thead>
                     <tr>
                        <th>
                           <Link className="FavoriteCard" to={`/recipe/${id}`}>
                              <CardTitle className="card-title">{title}</CardTitle>
                           </Link>
                        </th>
                        <td>

                        </td>
                        <td className="fav-log-btns">
                           <ButtonGroup>
                              {saved ? (<Button
                                 className="btn"
                                 outline color="warning"
                                 size="sm"
                                 onClick={handleUnFavorite}>
                                 unfavorite
                              </Button>)
                                 : (
                                    <Button
                                       className="btn"
                                       outline color="warning"
                                       size="sm"
                                       onClick={handleFavorite}>
                                       favorite
                                    </Button>
                                 )}

                              <Button
                                 className="btn"
                                 outline color="warning"
                                 size="sm"
                              >
                                 Log
                              </Button>
                           </ButtonGroup>

                        </td>
                     </tr>
                  </thead>
               </Table>
            </div>
         </Card>
      </div>
   )
};

export default FavoriteCard;
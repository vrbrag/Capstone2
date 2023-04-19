import React, { useEffect, useState, useContext } from 'react';
import KitchenApi from '../api';
import UserContext from '../auth/UserContext';
import FavoriteCard from './FavoriteCard';

function FavoriteList() {
   console.debug("FavoriteList", "currentUser=", currentUser)

   const { currentUser } = useContext(UserContext);
   const [favorites, setFavorites] = useState([]);

   const username = currentUser.username;
   // const username = testuser1;
   async function getItems(username) {
      let f = await KitchenApi.getAllFavorites(username);
      setFavorites(f)
   }

   useEffect(() => {
      getItems(username);
   }, []);

   return (
      <div className="FavoriteList">
         <h1>Favorite Recipes</h1>

         <div className="FavoriteList-list">
            {favorites.map(f => (
               <FavoriteCard
                  key={f.id}
                  id={f.id}
                  username={f.username}
               />
            ))}
         </div>
      </div >
   )
};

export default FavoriteList;
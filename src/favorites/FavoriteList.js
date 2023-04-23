import React, { useEffect, useState, useContext } from 'react';
import KitchenApi from '../api';
import UserContext from '../auth/UserContext';
import FavoriteCard from './FavoriteCard';

function FavoriteList() {


   const { currentUser } = useContext(UserContext);
   const [favorites, setFavorites] = useState([]);

   console.debug("FavoriteList", "currentUser=", currentUser)


   async function getItems(currentUser) {
      let f = await KitchenApi.getAllFavorites(currentUser.username);
      console.log("favorites=", f)
      setFavorites(f)
   }

   useEffect(() => {
      getItems(currentUser);
   }, []);




   return (
      <div className="FavoriteList">
         <h1 className="list-title">favorites</h1>

         <div className="FavoriteList-list">
            {favorites.length ? favorites.map(f => (
               <FavoriteCard
                  key={f.recipe_id}
                  id={f.recipe_id}
                  username={f.username}
                  title={f.title}

               />
            )) : (
               <p>No favorites yet!</p>
            )
            }
         </div>
      </div >
   )
};

export default FavoriteList;
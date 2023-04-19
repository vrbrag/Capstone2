import React from 'react';

function FavoriteCard(favorite) {
   const { id, username } = favorite;

   return (
      <div>
         {id} : {username}
      </div>
   )
};

export default FavoriteCard;
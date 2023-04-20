import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Login from '../auth/Login';
import NewRegister from '../auth/NewRegister';
import RecipeList from '../recipes/RecipeList';
import FavoriteList from '../favorites/FavoriteList';

function Routes({ login, register }) {
   return (
      <div className="main">
         <Route exact path="/">
            <Home />
         </Route>

         <Route exact path="/login">
            <Login login={login} />
         </Route>

         <Route exact path="/register" >
            <NewRegister register={register} />
         </Route>

         <Route exact path="/recipes">
            <RecipeList />
         </Route>

         <Route exact path="/favorites">
            <FavoriteList />
         </Route>

      </div>
   )
};

export default Routes;
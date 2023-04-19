import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../Home'
import Login from '../auth/Login'
import Register from '../auth/Register'
import RecipeList from '../recipes/RecipeList';

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
            <Register register={register} />
         </Route>


         <Route exact path="/recipes">
            <RecipeList />
         </Route>

      </div>
   )
};

export default Routes;
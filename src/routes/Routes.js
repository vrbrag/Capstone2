import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import Home from '../Home'
import RecipeList from '../recipes/RecipeList';

function Routes() {
   return (
      <div className="main">
         <Route exact path="/">
            {/* <Home /> */}
         </Route>
         <Route exact path="/recipes">
            <RecipeList />
         </Route>

      </div>
   )
};

export default Routes;
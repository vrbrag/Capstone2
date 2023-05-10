import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Login from '../auth/Login';
import NewRegister from '../auth/NewRegister';
import RecipeList from '../recipes/RecipeList';
import RecipeDetails from '../recipes/RecipeDetails';
import FavoriteList from '../favorites/FavoriteList';
import CreateRecipe from '../recipes/CreateRecipe';
import MyRecipesList from '../recipes/MyRecipesList';
import DailyLog from '../logs/DailyLog';
import VariationsList from '../variations/VariationsList';
import VariationDetails from '../variations/VariationDetails';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';

function Routes({ login, register }) {
   return (
      <div className="main">
         <Route exact path="/">
            <Home />
         </Route>

         <Route exact path="/create">
            <CreateRecipe />
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

         <Route exact path="/recipe/:id">
            <RecipeDetails />
         </Route>

         <Route exact path="/my-recipes">
            <MyRecipesList />
         </Route>

         <Route exact path="/favorites">
            <FavoriteList />
         </Route>

         <Route exact path="/logs">
            <DailyLog />
         </Route>

         <Route exact path="/search-variations/:id">
            <VariationsList />
         </Route>

         <Route exact path="/variation/:id">
            <VariationDetails />
         </Route>

         <Route exact path="/profile">
            <Profile />
         </Route>

         <Route exact path="/profile-edit">
            <ProfileEdit />
         </Route>

      </div>
   )
};

export default Routes;
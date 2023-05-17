import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../auth/UserContext';
import { useHistory } from 'react-router-dom';
import { Table } from 'reactstrap';
import RecipeLogInfo from './RecipeLogInfo';
import './LogTable.css'

function ListItem(recipe) {
   return <div>
      <RecipeLogInfo id={recipe.value} />
   </div>;
};

function LogTable(log) {

   const { currentUser } = useContext(UserContext);
   const { id, dailyTotal, recipeIds, date, isGoal } = log;
   console.log(recipeIds)

   const listRecipes = recipeIds.map((recipe, index) =>
      <ListItem key={index} value={recipe} />
   );

   // reformat Date
   const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   };
   const dateFormatted = date.toLocaleString('en-IN', options)
   console.log(dateFormatted)

   const caloriesLeft = currentUser.dailyCal - dailyTotal;

   return (
      <div>
         <Table>
            <thead>
               <tr className="LogTable-header">
                  <th>
                     {dateFormatted}
                  </th>
                  {isGoal ? <th>You met your goal!</th>
                     : (
                        <th>{caloriesLeft} cal left to goal!</th>
                     )}
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">
                     Recipes:
                  </th>
                  <td className="LogTable-listRecipes">{listRecipes}</td>
               </tr>
               <tr className="LogTable-totalRow">
                  <th scope="row">
                     Total Cal consumed:
                  </th>
                  <th className="LogTable-dailyTotal">
                     {dailyTotal} cal
                  </th>
               </tr>
            </tbody>
         </Table>
      </div>
   )
};

export default LogTable;
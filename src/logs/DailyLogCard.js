import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { moment } from 'moment'
import RecipeLogInfo from './RecipeLogInfo';

function ListItem(recipe) {
   return <li>
      <RecipeLogInfo id={recipe.value} />
   </li>;
};

function DailyLogCard(log) {
   const { id, dailyTotal, recipeIds, date, isGoal } = log

   // const date = moment();

   const listRecipes = recipeIds.map((recipe, index) =>
      <ListItem key={index} value={recipe} />
   );

   // const today = new Date()
   // console.log(today)
   // const date = new Date();
   const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   };
   const dateFormatted = date.toLocaleString('en-IN', options)
   console.log(dateFormatted)

   return (
      <div>
         <Card className="card-body">

            {/* {date == today ? } */}
            <CardTitle className="card-title">{dateFormatted}</CardTitle>

            <CardSubtitle>{dailyTotal}</CardSubtitle>

            {listRecipes}

            {isGoal ? (<CardSubtitle>Daily Goal achieved! </CardSubtitle>)
               : (
                  <CardSubtitle>You can still do it!</CardSubtitle>
               )}


         </Card>
      </div>
   )
}

export default DailyLogCard;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import UserContext from '../auth/UserContext';
import LogTable from './LogTable';
import RecipeLogInfo from './RecipeLogInfo';

// function ListItem(recipe) {
//    return <li>
//       <RecipeLogInfo id={recipe.value} />
//    </li>;
// };

function DailyLogCard(log) {
   const { id, dailyTotal, recipeIds, date, isGoal } = log
   // const { currentUser } = useContext(UserContext);

   // const listRecipes = recipeIds.map((recipe, index) =>
   //    <ListItem key={index} value={recipe} />
   // );

   // const options = {
   //    weekday: 'long',
   //    year: 'numeric',
   //    month: 'long',
   //    day: 'numeric',
   // };
   // const dateFormatted = date.toLocaleString('en-IN', options)
   // console.log(dateFormatted)

   // const caloriesLeft = currentUser.dailyCal - dailyTotal;

   return (
      <div>
         <Card className="card-body">
            <LogTable
               key={id}
               id={id}
               dailyTotal={dailyTotal}
               recipeIds={recipeIds}
               date={date}
               isGoal={isGoal}
            />

            {/* <CardTitle className="card-title">{dateFormatted}</CardTitle>

            <CardSubtitle>{dailyTotal} calories consumed.</CardSubtitle>

            {listRecipes}

            {isGoal ? (<CardSubtitle>Daily Goal achieved! </CardSubtitle>)
               : (
                  <CardSubtitle>{caloriesLeft} calories til' daily goal!</CardSubtitle>
               )} */}


         </Card>
      </div>
   )
}

export default DailyLogCard;
import React from 'react';
import { Card } from 'reactstrap';
import LogTable from './LogTable';


function DailyLogCard(log) {
   const { id, dailyTotal, recipeIds, date, isGoal } = log

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
         </Card>
      </div>
   )
}

export default DailyLogCard;
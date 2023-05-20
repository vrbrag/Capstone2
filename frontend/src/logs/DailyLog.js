import React, { useEffect, useState, useContext } from 'react';
import KitchenApi from '../api';
import UserContext from '../auth/UserContext';
import DailyLogCard from './DailyLogCard';

function DailyLog() {

   const { currentUser } = useContext(UserContext);
   const [logs, setLogs] = useState([]);

   async function getLogs(currentUser) {
      let logs = await KitchenApi.getLogs(currentUser.username)
      console.log(logs)
      setLogs(logs)
      // let ids = u.logs
      // let list = []

      // console.log(ids)
      // await Promise.all(
      //    ids.map(async (id) => {
      //       const log = await KitchenApi.getLogs(id);
      //       list.push(log)
      //       console.log(log)
      //    }))
      // setLogs(list)
   }

   useEffect(() => {
      getLogs(currentUser);
   }, []);

   console.debug("DailyLogList", "logs", logs)

   return (
      <div className="DailyLog">
         <h1 className="list-title">my logs</h1>
         <div className="DailyLog-list">
            {logs.length ? logs.map(l => (
               <DailyLogCard
                  key={l.id}
                  id={l.id}
                  dailyTotal={l.dailyTotal}
                  recipeIds={l.recipeIds}
                  date={l.date}
                  isGoal={l.isGoal}
               />
            ))
               : (
                  <p>No logs yet!</p>
               )}
         </div>
      </div>
   )
}

export default DailyLog;
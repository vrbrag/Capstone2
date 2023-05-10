import React, { useState, useEffect } from 'react';
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { Card, CardTitle, ButtonGroup, Button } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import { last } from 'lodash';
import KitchenApi from '../api';

function Profile() {

   const { currentUser } = useContext(UserContext);

   const { username, firstName, lastName, email, age, weight, height, gender, pal, goalWeight, dailyCal, logs } = currentUser;

   async function getTodayLog() {
      let l = await KitchenApi.getLogs
   }

   return (
      <div className="Profile">
         <h1 className="list-title">profile</h1>
         <Card className="card-body">
            <CardTitle className="card-title">
               {username}
            </CardTitle>
            <h2>{firstName} {lastName}</h2>
            <h3>Daily Goal Calories: {dailyCal}</h3>
            <h4>Todays Total Calories: </h4>
            <div>
               <ul>

               </ul>
            </div>
         </Card>
         <Link to={`/profile-edit`}>
            <Button
               className="btn"
               outline color="warning"
               size="sm"
            >
               edit
            </Button>
         </Link>

      </div>
   )
}

export default Profile;
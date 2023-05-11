import React, { useState, useEffect } from 'react';
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { Card, CardTitle, ButtonGroup, Button } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import KitchenApi from '../api';
import UserTable from './UserTable';

function Profile() {

   const { currentUser } = useContext(UserContext);

   const { username, firstName, lastName, email, age, weight, height, gender, pal, goalWeight, dailyCal, logs } = currentUser;

   async function getTodayLog() {
      let l = await KitchenApi.getLogs
   }

   return (
      <div className="Profile">
         <h1 className="list-title">profile</h1>
         {/* <Card className="card-body">
            <CardTitle className="card-title">
               {username}
            </CardTitle> */}
         <Card className="card-body">
            <UserTable />
         </Card>

         {/* <div className="container">
            <p>username: {username}</p>
            <p>first: {firstName}</p>
            <p>last: {lastName}</p>
            <p>email: {email}</p>
            <p>age: {age}</p>
            <p>weight: {weight}lbs.</p>
            <p>height: {height}in.</p>
            <p>gender: {gender}</p>
            <p>activity:{pal}</p>
            <p>goal: {goalWeight}</p>
            <p>daily cal: {dailyCal}kcal</p>
            <h4>Todays Total Calories: {logs}</h4>
            <div>
               <ul>

               </ul>
            </div>
         </div> */}

         {/* </Card> */}
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
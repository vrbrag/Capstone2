import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../auth/UserContext';
import { useHistory } from 'react-router-dom'
import { Table } from 'reactstrap'


function UserTable() {

   const { currentUser } = useContext(UserContext);

   const { username, firstName, lastName, email, age, weight, height, gender, pal, goalWeight, dailyCal, logs } = currentUser;

   // const palMap = new Map([
   //    [1.2, "Little or No exercise"],
   //    [1.4, "Light exercise 1-2 times a week"],
   //    [1.6, "Moderate exercise 2-3 times/week"],
   //    [1.75, "Hard exercise 3-5 times/week"],
   //    [2.0, "I have a physical job or perform hard exercise 6-7 times/week"],
   //    [2.4, "Professional Athlete"]
   // ]);

   // let palRes = "";

   // async function palToRes(pal) {
   //    if (palMap.has(pal)) {
   //       console.log(palMap.get(pal))
   //       let palRes = palMap.get(pal)
   //       return palRes;
   //    } else {
   //       return pal
   //    }
   // }



   // useEffect(() => {
   //    palToRes(pal)
   // }, currentUser)


   return (

      <div>
         <Table>
            <thead>
               <tr>
                  {/* <th>
                     #
                  </th>
                  <th>
                     First Name
                  </th> */}
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">
                     username
                  </th>
                  <td>
                     {username}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     first
                  </th>
                  <td>
                     {firstName}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     last
                  </th>
                  <td>
                     {lastName}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     email
                  </th>
                  <td>
                     {email}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     age
                  </th>
                  <td>
                     {age}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     weight
                  </th>
                  <td>
                     {weight}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     height
                  </th>
                  <td>
                     {height}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     gender
                  </th>
                  <td>
                     {gender}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     activity level
                  </th>
                  <td>
                     {pal}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     weight goal
                  </th>
                  <td>
                     {goalWeight}
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     daily calorie  goal
                  </th>
                  <td>
                     {dailyCal}
                  </td>
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default UserTable;
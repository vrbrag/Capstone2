import React, { useContext } from 'react'
// import UserContext from './auth/UserContext';
import { Link } from 'react-router-dom'
// import './Home.css'

function Home() {

   console.debug("Homepage", "currentUser=");

   return (
      <div className="Home">
         <h1>My Kitchen</h1>
         <h3>What's cookin'?</h3>
         <p>
            Login
            Signup
         </p>
         <p>
            You have *** calories left to meet your daily goal!
         </p>
         <Link to="/recipes">Recipes</Link>
         <Link to="/login">Log</Link>
         <Link to="/register">Register</Link>
      </div>
   )
};

export default Home;
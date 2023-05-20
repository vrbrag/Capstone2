import React, { useContext } from 'react';
import UserContext from './auth/UserContext';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
   const { currentUser } = useContext(UserContext)
   console.debug("Homepage", "currentUser=", currentUser);

   return (
      <div className="Home">
         <div>
            <h1>My Kitchen</h1>
            <p><small><i>
               Create, Search, Favorite, and Log daily calories of all your favorite meals!
            </i></small></p>
            {currentUser ?
               <h3>What's cookin' {currentUser.firstName || currentUser.username}? </h3>


               : (
                  <p>
                     <Link
                        className="btn"
                        outline="true"
                        color="warning"
                        size="sm" to="/login">log in
                     </Link>
                     <Link
                        className="btn"
                        outline="true"
                        color="warning"
                        size="sm" to="/register">register
                     </Link>
                  </p>
               )
            }
         </div>
      </div>
   )
};

export default Home;
import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from '../auth/UserContext';
// import './NavBar.css'

function NavBar({ logout }) {
   const { currentUser } = useContext(UserContext)
   console.debug("NavBar", "currentUser=", currentUser)

   function loggedInNav() {
      return (
         <div >
            <Navbar className="nav-brand" color="success" expand="md">
               <NavLink exact to="/" className="navbar-brand mr-2">
                  My Kitchen
               </NavLink>

               <Nav className="ms-auto" navbar>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/recipes">All Recipes</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/create">Create Recipe</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                  </NavItem>

                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink id="nav-logout" className="nav-link" to="/" onClick={logout}>Logout {currentUser.first_name || currentUser.username} </NavLink>
                  </NavItem>
               </Nav>
            </Navbar>
         </div>
      )
   }

   function loggedOutNav() {
      return (
         <div>
            <Navbar className="nav-brand" color="success" expand="md">
               <NavLink exact to="/" className="navbar-brand mr-2">
                  My Kitchen
               </NavLink>

               <Nav className="ms-auto" navbar>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/recipes">Recipes</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                  </NavItem>

                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/register">Register</NavLink>
                  </NavItem>
               </Nav>
            </Navbar>
         </div>
      )
   }


   return (
      <nav>
         {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
   )
};

export default NavBar;
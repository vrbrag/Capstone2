import React, { useContext } from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from '../auth/UserContext';
import './NavBar.css'

function NavBar({ logout }) {
   const { currentUser } = useContext(UserContext)
   console.debug("NavBar", "currentUser=", currentUser)

   const [isRecipeOpen, setIsRecipeOpen] = useState(false);
   const toggleRecipes = () => setIsRecipeOpen(!isRecipeOpen)

   // const [isSearchOpen, setIsSearchOpen] = useState(false);
   // const toggleSearch = () => setIsSearchOpen(!isSearchOpen)


   function loggedInNav() {
      return (
         <div className="NavBar">
            <Navbar className="nav-brand" expand="md">
               <NavLink exact to="/" className="navbar-brand mr-2">
                  My Kitchen
               </NavLink>

               <Nav className="me-auto" navbar>

                  < Dropdown isOpen={isRecipeOpen} toggle={toggleRecipes} >
                     <DropdownToggle color="none" className="navbar-item" caret>
                        Recipes
                     </DropdownToggle>
                     <DropdownMenu>
                        <DropdownItem className="navbar-item" tag={Link} to={`/recipes`} >
                           all recipes
                        </DropdownItem>
                        <DropdownItem className="navbar-item" tag={Link} to={`/my-recipes`} >
                           my recipes
                        </DropdownItem>
                        <DropdownItem className="navbar-item" tag={Link} to={`/create`} >
                           create recipe
                        </DropdownItem>
                        {/* <DropdownItem divider /> */}
                        <DropdownItem className="navbar-item" tag={Link} to={`/favorites`} >
                           favorites
                        </DropdownItem>
                     </DropdownMenu>
                  </Dropdown >



                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/logs">Logs</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                     <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </NavItem>
               </Nav>

               <NavbarText className="navbar-item">
                  <NavLink id="nav-logout" className="nav-link" to="/" onClick={logout}>Logout {currentUser.first_name || currentUser.username} </NavLink>
               </NavbarText>
            </Navbar>
         </div >
      )
   }

   function loggedOutNav() {
      return (
         <div className="NavBar">
            <Navbar className="nav-brand" expand="md">
               <span className="navbar-brand-logout mr-2">
                  My Kitchen
               </span>

               <Nav className="ms-auto" navbar>
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
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './routes/NavBar';
import Routes from './routes/Routes';
import KitchenApi from './api';
import UserContext from './auth/UserContext';
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "ktichen-token"
function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "currentUser=", currentUser,
    "token=", token,
  );

  useEffect(function getUserInfo() {
    console.log("App getUserIinfo", "token=", token)

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token)

          KitchenApi.token = token; // set token here
          let currentUser = await KitchenApi.getCurrentUser(username);
          setCurrentUser(currentUser);

        } catch (e) {
          console.error("App getUserInfo error loading", e);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser()
  }, [token]);

  async function register(registerData) {
    try {
      let token = await KitchenApi.register(register)
      setToken(token)
      return { success: true }
    } catch (e) {
      console.error("signup failed", e)
      return { success: false, e }
    }
  };

  async function login(loginData) {
    try {
      let token = await KitchenApi.login(loginData)
      setToken(token)
      return { success: true }
    } catch (e) {
      return { success: false, e }
    }
  };

  async function logout() {
    setCurrentUser(null)
    setToken(null)
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <div className="App">
            <NavBar logout={logout} />
            <Routes login={login} register={register} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

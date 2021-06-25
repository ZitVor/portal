import React from 'react'
import 'materialize-css' 
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {AuthContext} from './context/AuthContext'
import { useAuth } from './hook/auth.hook'
import { Navbar } from './сomponents/Navbar'
import {Loader} from './сomponents/Loader'
import 'materialize-css'
import './index.css'
import { Footer } from './сomponents/Footer'

function App() {
  const {token, login, logout, userId,userRate, userEmail, ready} = useAuth()
  const isAuthenticated = !!token
  const isAdmin = userEmail === 'kusia@gmail.com'
  const routes = useRoutes(isAuthenticated)
  if(!ready){
    return <Loader/>
  }
  return (
    <AuthContext.Provider value = {{token, login, logout, userId, isAuthenticated,
     userRate, userEmail, isAdmin}}>
    <Router>
    {isAuthenticated && <Navbar/>}
    <div className="container">
     {routes}
    </div>
    <Footer />
    </Router>
    </AuthContext.Provider>
  );
}
export default App;

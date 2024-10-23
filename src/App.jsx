import { useContext, useEffect, useState } from 'react'

// import Navbar from './Components/UserNavbar'

import Footer from './Components/Footer'
import NavbarUser from './Components/NavbarUser'
import Side from './Components/Side'
import { Outlet } from 'react-router'
import Home from './Components/Home'
import Login from './Components/Login'
import UserContextProvider, { userContext } from './Context/UserContextProvider'




function App() {


  return (
    <>
    <UserContextProvider>
      <NavbarUser />
      <Outlet/>
      <Footer/>
      
      
      </UserContextProvider>
    
    </>
  )
}

export default App

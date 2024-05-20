import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Food from './Components/Food.jsx'
import Home from "./Components/Home/Home.jsx"
import Quote from "./Components/Quote.jsx"
import Restaurant from './Components/Restaurant/Restaurant.jsx'
import Contact from './Components/Contact.jsx'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Fooddetails from './Components/Fooddetails.jsx'

const Mains = () => {
  return (
    <>
    <Navbar/>
    {/* <Food/> */}
    {/* <Home/> */}
    {/* <Quote/> */}
    {/* <Restaurant/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}
const routera=createBrowserRouter([
  {
    path:"/",
    element:<Mains/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Home",
        element:<Home/>

      },
      {
        path:"/Quote",
        element:<Quote/>
      },
      {
        path:"/Restaurant",
        element:<Restaurant/>
      },{
        path:"/Food",
        element:<Food/>
      },{
        path:"/Contact",
        element:<Contact/>
      },{
        path:"/Fooddetails/:id",
        element:<Fooddetails/>
      }
    ]
  }
  
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routera}/>)

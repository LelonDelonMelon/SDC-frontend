import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'flowbite'
import 'flowbite-react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './assets/components/Navbar';
import User from './assets/components/User';
import Profile from './assets/components/Profile';
import Campaign from './assets/components/Campaign';
import Register from './assets/components/Register';
import Login from './assets/components/Login';
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Hello name= "Burak"></Hello> 
//   }
// ])

//<RouterProvider router={router}/>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/campaign",
    element: <Campaign/>,
  },
  {
    path:'/register',
    element: <Register/>,
  },
  {
    path:'login',
    element: <Login/>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>    
  </React.StrictMode>,
)

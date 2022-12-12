import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Hello from './routes/Hello';
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Hello name= "Burak"></Hello> 
//   }
// ])

//<RouterProvider router={router}/>


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />    
  </React.StrictMode>,
)

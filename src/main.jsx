import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/components/home.jsx'
import About from './assets/components/about.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/> 
    </React.StrictMode>
   
) 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './Component/Shop/Shop.jsx';
import ErrorPage from './Component/Error/ErrorPage.jsx';
import JObDetails from './Component/detailsJob/JObDetails.jsx';
import AppliedJob from './Component/AppliedJob/AppliedJob.jsx';
import Statices from './Component/statices/Statices.jsx';
import { productsAndCartData } from './loader/GetCart&p.js';
import Blog from './Component/Blogs/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
          path:'/',
          element:<Shop></Shop>,
          loader: ()=>fetch('product.json')
      },
      {
        path: 'job/:id',
        element:<JObDetails></JObDetails>, 
        loader: () => fetch('product.json') // do not load all data. load only what you need
      },
     {
      path:'appliedjob',
      element:<AppliedJob></AppliedJob>,
      loader:productsAndCartData
     },
     {
      path:'statices',
      element:<Statices></Statices>,
     },
     {
      path:'blog',
      element:<Blog></Blog>
     }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

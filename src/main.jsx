import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import routes from './Routes.jsx'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

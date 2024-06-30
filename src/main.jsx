import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoute from './Route/Route'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={myRoute}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

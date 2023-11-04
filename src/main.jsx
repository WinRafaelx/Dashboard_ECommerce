import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SalesReport from './pages/SalesReport.jsx'
import Customer from './pages/Customer.jsx'
import Inventory from './pages/Inventory.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  }, 
  {
    path: '/sales-report',
    element: <SalesReport /> 
  },
  {
    path: '/inventory',
    element: <Inventory />
  },
  {
    path: '/customer',
    element: <Customer />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

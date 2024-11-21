import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Register/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/dashboard',
    element:<Dashboard/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
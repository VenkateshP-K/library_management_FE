import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import RentedBooks from './Admin/RentedBooks'
import UpdateUser from './components/UpdateUser'
import CreateBook from './Admin/CreateBook'
import AllRentedBooks from './Admin/AllRentedBooks'
import Users from './components/Users'
import Books from './components/Books'
import NavBar from './NavBar'

const router = createBrowserRouter([
  {
    path: '/',
    element:<NavBar/>
  },
  {
    path: '/register',
    element:<Register/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/dashboard',
    element:<Dashboard/>,
    children :[
      {
        path: '/dashboard/books',
        element:<Books/>
      },
     {
      path: '/dashboard/rentedBooks',
      element:<RentedBooks/>
     },
     {
      path : '/dashboard/update',
      element:<UpdateUser/>
     }
    ]
  },

  //for admin
  {
    path: '/dashboard',
    element:<Dashboard/>,
    children :[
     {
      path: '/dashboard/createBook',
      element:<CreateBook/>
     },
     {
      path: '/dashboard/allRentedBooks',
      element:<AllRentedBooks/>
     },
     {
      path: '/dashboard/users',
      element:<Users/>
     }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
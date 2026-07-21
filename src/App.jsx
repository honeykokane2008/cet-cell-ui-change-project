import './App.css'
import Topbar from './component/reusable/Topbar'
import Navbar from './component/reusable/Navbar'
import Button from './component/ul-component/Button'
import Home from './component/pages/Home'
import Footer from './component/reusable/Footer'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />
    },
    {
      path: "/home",
      element: <><Topbar /><Navbar /><Home /><Footer /></>
    },
    {
      path: "/about",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/candidate",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/cets",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/institute",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/download",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/contact",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/work-with-us",
      element: <><Topbar /><Navbar /><Footer /></>
    },
    {
      path: "/user-manual",
      element: <><Topbar /><Navbar /><Footer /></>
    },
  ])


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>

    </>
  )
}

export default App

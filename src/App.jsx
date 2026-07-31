import './App.css'
import Topbar from './component/reusable/Topbar'
import Navbar from './component/reusable/Navbar'
import Button from './component/ul-component/Button'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Footer from './component/reusable/Footer'
import Candidate from './component/pages/Candidate'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Contact from './component/pages/Contact'

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
      element: <><Topbar /><Navbar /><About /><Footer /></>
    },
    {
      path: "/candidate",
      element: <><Topbar /><Navbar /><Candidate /><Footer /></>
    },
    {
      path: "/contact",
      element: <><Topbar /><Navbar /><Contact /><Footer /></>
    }
  ])


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>

    </>
  )
}

export default App

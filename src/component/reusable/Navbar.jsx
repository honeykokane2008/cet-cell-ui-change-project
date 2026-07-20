import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ul-component/Button'
import { navLinks, navLinksClass } from '../../data/navLink'
import { useState } from 'react'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='Navbar sticky top-0 left-0 w-full z-50 p-1   flex justify-evenly items-center bg-(--background) border-transparent rounded-(--radius) m-1 '>
            <div className=' flex justify-evenly items-center'>
                <img className="w-15 h-15 rounded-full object-cover" alt='cet-cell-logo' src='src\photos\STATE_CET__CELL_Mumbai_idJ-CwTB2m_1.jpeg'>
                </img>
                <div className='text-(--foreground)'><h1>Government of Maharashtra</h1><p>State Common Entrance Test Cell</p></div>
            </div>

            <div className="List hidden md:block">
                <ul className='flex flex-wrap justify-center list-none gap-4'>

                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `${navLinksClass} ${isActive ? "after:w-full text-(--primary)" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className=" md:hidden flex flex-col justify-center items-center gap-1.5 p-2 "
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-(--foreground) transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-(--foreground) transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-(--foreground) transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>


            <div
                className={`md:hidden absolute top-full right-0 w-1/2 bg-(--background) flex flex-col items-center gap-4 py-4 z-50 shadow-md transition-all duration-300 ease-in-out 
                    ${isOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                    }`}
            >
                <ul className="flex flex-col items-center list-none gap-4">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `${navLinksClass} ${isActive ? "after:w-full text-(--primary)" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <Button variant="primary">LogIn / SignIn</Button>
            </div>



            <div className="hidden md:block">
                <Button variant="primary">LogIn / SignIn</Button>
            </div>
        </div>
    )
}

export default Navbar

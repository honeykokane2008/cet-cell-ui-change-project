import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ul-component/Button'

const Candidate = () => {
    return (
        <>
            <div className='flex flex-col m-3 p-2 md:w-2/5'>
                <ul className='flex gap-2.5 text-xs'>
                    <li>
                        <NavLink
                            to={"/home"}
                            className={"hover:text-(--primary) text-gray-500"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        &gt;
                    </li>
                    <li>
                        Candidate portal
                    </li>
                </ul>
                <h1 className='mt-2.5'>Candidate Login Portal</h1>
                <p className='text-xs text-gray-500'>Maharashtra Commen Enterence Test Cell</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-4 border-2 border-gray-300 bg-(--background) m-1 p-6 rounded-2xl w-full max-w-sm'>

                    <div className='text-center'>
                        <h2 className='text-sm font-bold text-[#1B4FD8] uppercase tracking-wider'>
                            Candidate Portal
                        </h2>
                        <p className='text-xs text-gray-500 mt-1'>
                            Access your CET account to continue
                        </p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor='regNumber' className='text-xs text-gray-600'>
                            Registration Number
                        </label>
                        <input
                            id='regNumber'
                            type='text'
                            placeholder='Enter your registration number'
                            className='border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent'
                        />
                    </div>

                    <Button variant='primary'>Log in</Button>

                    <div className='flex items-center gap-2 text-gray-400 text-xs'>
                        <div className='flex-1 h-px bg-gray-200' />
                        OR
                        <div className='flex-1 h-px bg-gray-200' />
                    </div>

                    <Button variant='secondary'>New Registration</Button>

                    <p className='text-center text-[11px] text-gray-400 mt-1'>
                        Forgot your registration number?{' '}
                        <span className='text-(--primary) cursor-pointer hover:underline'>Recover it here</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Candidate

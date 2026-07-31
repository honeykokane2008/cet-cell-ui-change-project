import React from 'react'
import { NavLink } from 'react-router-dom'
import { leadership, team } from '../../data/Data'

const About = () => {
    return (
        < >
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
                        About Us
                    </li>
                </ul>
                <h1 className='mt-2.5'>MHT CET CELL</h1>
                <p className='text-xs text-gray-500'>Maharashtra Commen Enterence Test Cell</p>
            </div>
            
            <div className='flex flex-col md:flex-row gap-6'>

                <div className='flex flex-col gap-1.5 md:w-3/5 border-2 border-gray-300 bg-(--background) m-1 p-4 rounded-2xl'>

                    <h2 className='text-xs font-bold text-[#1B4FD8] uppercase tracking-wider m-2.5'>Our Mandate</h2>
                    <p className='font-thin text-gray-600 m-2.5 text-justify w-full'>
                        The State Common Entrance Test Cell, Maharashtra, is the official authority responsible for conducting Common Entrance Tests &#40; CETs &#x29; and managing the centralized admission process for professional courses across the state. The portal serves as a single platform for students to register for examinations, apply for admissions, verify documents, and access official notifications.
                    </p>
                </div>
                <div className='flex flex-col gap-1.5 md:w-3/5 border-2 border-gray-300 bg-(--background) m-1 p-4 rounded-2xl'>
                    <h2 className='text-xs font-bold text-[#1B4FD8] uppercase tracking-wider m-2.5'>Our meation</h2>
                    <p className='font-thin text-gray-600 m-2.5'>
                        The State Common Entrance Test Cell, Maharashtra, is the official authority responsible for conducting Common Entrance Tests &#40; CETs &#x29; and managing the centralized admission process for professional courses across the state. The portal serves as a single platform for students to register for examinations, apply for admissions, verify documents, and access official notifications.
                    </p>
                </div>

                <div className='flex flex-col gap-1.5 md:w-3/5 border-2 border-gray-300 bg-(--background) m-1 p-4 rounded-2xl'>
                    <h2 className='text-xs font-bold text-[#1B4FD8] uppercase tracking-wider m-2.5'>Under the leadership off</h2>
                    <ul className=' flex flex-col gap-2.5'>

                        {leadership.map((leader) => (
                            <li key={leader.initial}>

                                <div className='flex gap-2 items-center'>
                                    <div >
                                        <span className='w-10 h-10 bg-(--primary) text-white flex justify-center items-center rounded-4xl'>{leader.initial}</span>
                                    </div>
                                    <div>
                                        <h3 className='inline-block'>{leader.name}</h3>
                                        <p className='font-thin text-gray-600'>{leader.designation}</p>
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-1.5  border-2 border-gray-300 bg-(--background) m-1 p-4 rounded-2xl w-full overflow-x-auto'>
                <h2 className='text-xs font-bold text-[#1B4FD8] uppercase tracking-wider m-2.5 text-center'>Our team</h2>
                <table className='w-full border-collapse min-w-125'>
                    <thead className='bg-(--muted)'>
                        <tr>
                            <th className='text-left px-4 py-2 text-sm font-semibold'>Sr No.</th>
                            <th className='text-left px-4 py-2 text-sm font-semibold'>Name</th>
                            <th className='text-left px-4 py-2 text-sm font-semibold'>Department</th>
                            <th className='text-left px-4 py-2 text-sm font-semibold'>Designation</th>
                        </tr>
                    </thead>
                    <tbody >
                        {team.map((teamM) => (
                            <tr key={teamM.Sr}
                                className='border-gray-300 hover:bg-gray-100'>
                                <td className='px-4 py-2 border-b-2 border-gray-300 text-sm'>
                                    {teamM.Sr}
                                </td>
                                <td className='px-4 py-2 border-b-2 border-gray-300 text-sm'>
                                    {teamM.name}
                                </td>
                                <td className='px-4 py-2 border-b-2 border-gray-300 text-sm'>
                                    {teamM.department}

                                </td>
                                <td className='px-4 py-2 border-b-2 border-gray-300 text-sm'>
                                    {teamM.designation}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default About

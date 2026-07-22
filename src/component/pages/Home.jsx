import React from 'react'
import Card from '../ul-component/Card'
import { NavLink, Link } from 'react-router-dom'
import { logLinks } from '../../data/Data'


const Home = () => {
  return (
    <div className='flex justify-evenly'>

      <section className=' bg-(--background) p-6 flex flex-col gap-4 w-fit m-2 border border-transparent rounded-4xl'>
        <p className='text-xs font-semibold tracking-[0.2em] uppercase text-(--foreground)/40 px-1'>
          Notice Board
        </p>

      </section>

      <section className='cardSection bg-(--background) p-6 flex flex-col gap-4 w-fit m-2 border border-transparent rounded-4xl'>

        <p className='text-xs font-semibold tracking-[0.2em] uppercase text-(--foreground)/40 px-1'>
          Platform at a glance
        </p>

        <div className='flex flex-wrap md:flex-nowrap gap-3'>
          <Card
            accent="#4F46E5"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4M3 13v4l9 4 9-4v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="6"
            description="Departments"
          />
          <Card
            accent="#D4A017"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="19"
            description="CET Exams"
          />
          <Card
            accent="#0F9D8B"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="73"
            description="Courses"
          />
          <Card
            accent="#C2410C"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m-1 4h1m4-4h1m-1 4h1M9 21v-4h6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="4,000+"
            description="Institutes"
          />
        </div>

      </section>


      <section className='login-side bg-(--background) m-2 h-fit w-fit border border-transparent rounded-4xl flex-col p-6'>

        <p className='text-xs font-semibold tracking-[0.2em] uppercase text-(--foreground)/40 px-1'>
          LogIn Side
        </p>
        <ul className='flex flex-col gap-5 p-5'>
          {logLinks.map((log) => (
            <Link to={log.path} >
              <li key={log.label}>
                <button className='group flex justify-around items-center gap-4 w-full text-left p-3 rounded-2xl transition-all duration-200 hover:bg-(--foreground)/5'
                >

                  <span className='flex items-center justify-center shrink-0 w-11 h-11 rounded-xl transition-transform duration-200 group-hover:scale-105' style={{ backgroundColor: `${log.accent}1A`, color: log.accent }}>
                    {log.icon}
                  </span>
                  <span className='flex flex-col'>
                    <span className='text-sm font-semibold text-(--foreground)'>{log.label}
                    </span>

                    <span className='text-xs text-(foreground)/45'>
                      {log.sub}
                    </span>
                  </span>
                  <svg
                    className='ml-auto shrink-0 text-(--foreground)/25 transition-all duration-200 group-hover:text-(--foreground)/60 group-hover:translate-x-0.5'
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>
                </button>

              </li>
            </Link>
          ))}
        </ul>

      </section>
    </div >
  )
}

export default Home




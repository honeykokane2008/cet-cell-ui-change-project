import React from 'react'
import Card from '../ul-component/Card'
import { NavLink, Link } from 'react-router-dom'
import { logLinks, noticeBoard } from '../../data/Data'

const Home = () => {
  return (
    <div className='flex flex-col gap-4 px-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-4 lg:flex lg:flex-row lg:flex-nowrap lg:justify-evenly lg:gap-2 lg:px-0'>

      <section className='cardSection bg-(--background) p-6 flex flex-col gap-4 w-full sm:col-span-2 lg:col-span-1 lg:w-120 lg:shrink-0 border border-transparent rounded-4xl text-xs sm:text-sm'>

        <div className='flex items-center justify-between'>
          <p className="text-(--foreground)/40">
            Platform at a glance
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4'>

          <Card
            accent="#43484D"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4M3 13v4l9 4 9-4v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="6"
            description="Departments"
          />

          <Card
            accent="#43484D"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="19"
            description="CET Exams"
          />

          <Card
            accent="#43484D"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="73"
            description="Courses"
          />

          <Card
            accent="#43484D"
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

      <section className='noticeBoard bg-(--background) p-6 flex flex-col gap-4 w-full lg:w-fit border border-transparent rounded-4xl text-xs sm:text-sm'>
        <p className="text-(--foreground)/40">
          Notice Board
        </p>

        <div className='overflow-x-auto w-full h-fit max-h-89 scroll-smooth scrollbar-thin scrollbar-gutter-stable'>
          <table className='w-full'>
            <thead className='w-fit'>
              <tr>
                <th className='text-left p-2.5'>Published Date</th>
                <th className='text-left p-2.5'>Subject</th>
              </tr>
            </thead>

            <tbody className='w-fit'>
              {noticeBoard.map((notice) => (
                <tr key={notice.id}>
                  <td className='align-top p-2.5'>
                    <p>{notice.date}</p>
                  </td>
                  <td className='align-top p-2.5 flex flex-col gap-2.5'>
                    <h1 className='text-sm font-medium truncate sm:text-sm'>{notice.course}</h1>
                    <Link to={notice.path}>
                      <p className=' text-(--foreground)/40 text-[10px] sm:text-xs'>{notice.description}</p>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className='w-full lg:w-fit'>
        <section className='login-side bg-(--background) h-fit w-full lg:w-fit lg:min-w-max border border-transparent rounded-4xl flex-col p-6 text-xs sm:text-sm'>

          <p className="text-(--foreground)/40">
            LogIn Side
          </p>
          <ul className='flex flex-col gap-5 p-5'>
            {logLinks.map((log) => (

              <li key={log.label}>
                <Link to={log.path} className='group flex justify-around items-center gap-4 w-full text-left p-3 rounded-2xl transition-all duration-200 hover:bg-(--foreground)/5'
                >

                  <span className='flex items-center justify-center shrink-0 w-11 h-11 rounded-xl transition-transform duration-200 group-hover:scale-105' style={{ backgroundColor: `${log.accent}1A`, color: log.accent }}>
                    {log.icon}
                  </span>
                  <span className='flex flex-col'>
                    <span className='text-sm font-semibold text-(--foreground) sm:text-sm'>{log.label}
                    </span>

                    <span className='text-(foreground)/45 text-[10px] sm:text-xs text-(foreground)/45'>
                      {log.sub}
                    </span>
                  </span>
                  <svg
                    className='ml-auto shrink-0 text-(--foreground)/25 transition-all duration-200 group-hover:text-(--foreground)/60 group-hover:translate-x-0.5'
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>
                </Link>

              </li>

            ))}
          </ul>

        </section>
      </div>
    </div>
  )
}

export default Home

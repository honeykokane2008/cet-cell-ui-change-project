
import React from 'react'
import Card from '../ul-component/Card'
import { NavLink, Link } from 'react-router-dom'
import { logLinks, noticeBoard, statCards } from '../../data/Data'
import heroImg from '../../photos/Gemini_Generated_Image_dcvu77dcvu77dcvu.png'

const Home = () => {
  return (
    <>
      <div className="w-full m-0.5">
        <section className='relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden rounded-4xl'>

          <img
            className='w-full h-full inset-0 absolute object-cover'
            src={heroImg}
            alt='background img'
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

          <div className='text-(--foreground) hero-text relative z-10 flex h-full flex-col items-center justify-center text-center px-4'>
            <span>since 2015</span>
            <h1 className='font-bold tracking-tight'>CET CELL</h1>
            <p className='px-1 mt-4'>Supporting students to get their dream colleges for more than 15 years</p>
            <Link to={"/about"} className='m-2 border-b-2 hover:text-(--primary) hover:cursor-pointer'>
              More About CET Cell -&gt;
            </Link>
          </div>
        </section>
      </div>




      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 lg:px-0 w-full m-0.5'>


        <section className='login-side  bg-(--background) flex flex-col w-full border-2 border-gray-300 rounded-4xl p-6 text-xs sm:text-sm'>
          <p className="text-(--foreground)/40">LogIn Side</p>
          <ul className='flex flex-col gap-5 p-5'>
            {logLinks.map((log) => (
              <li key={log.label}>
                <Link
                  to={log.path}
                  className='group flex justify-around items-center gap-3 w-full text-left p-2 rounded-2xl transition-all duration-200 hover:bg-(--foreground)/5 border border-gray-300'
                >
                  <span
                    className='flex items-center justify-center shrink-0 w-11 h-11 rounded-xl transition-transform duration-200 group-hover:scale-105'
                    style={{ backgroundColor: `${log.accent}1A`, color: log.accent }}
                  >
                    {log.icon}
                  </span>
                  <span className='flex flex-col'>
                    <span className='text-sm font-semibold text-(--foreground)'>{log.label}</span>
                    <span className='text-[10px] sm:text-xs text-(--foreground)/45'>{log.sub}</span>
                  </span>
                  <svg
                    className='ml-auto shrink-0 text-(--foreground)/25 transition-all duration-200 group-hover:text-(--foreground)/60 group-hover:translate-x-0.5'
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

        </section>


        <section className='cardSection bg-(--background) p-6 flex flex-col gap-4 w-full sm:col-span-2 lg:col-span-1 border-2 border-gray-300 rounded-4xl text-xs sm:text-sm'>
          <p className="text-(--foreground)/40">Platform at a glance</p>
          <div className='grid grid-cols-2 gap-4'>
            {statCards.map((card) => (

              <Card
                key={card.description}
                accent={card.accent}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

        </section>

        <section className='noticeBoard bg-(--background) p-6 flex flex-col gap-4 w-full sm:col-span-2 lg:col-span-1 border-2 border-gray-300 rounded-4xl text-xs sm:text-sm max-h-100 lg:max-h-137'>
          <p className="text-(--foreground)/40">Notice Board</p>
          <div className='overflow-y-auto overflow-x-auto w-full flex-1 min-h-0 scroll-smooth scrollbar-thin scrollbar-gutter-stable'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th scope="col" className='text-left p-2.5'>Published Date</th>
                  <th scope="col" className='text-left p-2.5'>Subject</th>
                </tr>
              </thead>
              <tbody>
                {noticeBoard.map((notice) => (
                  <tr key={notice.id}>
                    <td className='align-top p-2.5'>
                      <p>{notice.date}</p>
                    </td>
                    <td className='align-top p-2.5'>
                      <div className='flex flex-col gap-2.5'>
                        <p className='text-sm font-medium truncate'>{notice.course}</p>
                        <Link to={notice.path}>
                          <p className='text-[10px] sm:text-xs text-(--foreground)/40'>{notice.description}</p>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home
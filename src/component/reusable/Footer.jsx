import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, navLinksClass } from '../../data/navLink'


const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-(--foreground) text-white px-10 py-12' >
            <div className="Address flex-col space-y-5">
                <div className='flex items-start gap-3'>
                    <img className="w-15 h-15 rounded-full object-cover" alt='cet-cell-logo' src='src\photos\STATE_CET__CELL_Mumbai_idJ-CwTB2m_1.jpeg'>
                    </img>

                    <div className='text-white'><h1>Government of Maharashtra</h1><p>State Common Entrance Test Cell</p></div>
                </div>

                <div className='flex items-start gap-3'>
                    <img className='w-10 h-10' src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" alt="marker" />

                    <p>8th Floor, New Excelsior Building,
                        A. K. Nayak Marg, Fort,
                        Mumbai- 400 001
                    </p>
                </div>
                <div className='flex items-start gap-3'>
                    <img className='w-10 h-10' src="https://img.icons8.com/material-sharp/24/FFFFFF/globe--v1.png" alt="globe--v1" />

                    <a target="_blank" rel="noopener noreferrer" href='https://www.mahacet.org'>www.mahacet.org</a>
                </div>
                <div className='flex items-start gap-3'>
                    <img className='w-10 h-10' src="https://img.icons8.com/external-solid-icons-royyan-wijaya/48/FFFFFF/external-so-phone-helpline-mental-health-awareness-solid-icons-royyan-wijaya.png" alt="external-so-phone-helpline-mental-health-awareness-solid-icons-royyan-wijaya" />

                    <span>Helpline Number For CAP (Admission): Course wise Helpline numbers provided in the respective admission page</span>
                </div>
            </div>
            <div className="Quick-link">
                <h1>Quic Links</h1>
                <ul className='list-none gap-4.5 grid grid-cols-2'>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `${navLinksClass} ${isActive ? "after:w-full text-(--primary)" : ""} text-white`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}


                </ul>
            </div>
            <div className="visitor-counter ">
                <h1>Follow us on Social Media</h1>
                <div className='grid grid-cols-2'>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/channel/UCxG62HhJYPs84j1hHxTd_hA'>
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/youtube-play.png" alt="youtube-play" />
                    </a>
                    <a target='_blank' rel='noopeneer noreferrer' href='https://www.facebook.com/statecetcell'>
                        <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    </a>
                    <a target='_blank' rel='noopeneer noreferrer' href='https://x.com/cetcell?s=11'>
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1" />
                    </a>
                    <a target='_blank' rel='noopeneer noreferrer' href='https://www.instagram.com/statecetcellmumbai/'>
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

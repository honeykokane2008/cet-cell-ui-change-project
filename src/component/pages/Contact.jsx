import React from 'react'
import { NavLink } from 'react-router-dom'

const InfoRow = ({ label, value, href }) => (
    <div className='flex flex-col gap-0.5'>
        <span className='text-[11px] text-gray-500 uppercase tracking-wide'>{label}</span>
        {href ? (
            <a href={href} className='text-sm text-(--primary) hover:underline w-fit'>
                {value}
            </a>
        ) : (
            <span className='text-sm text-gray-800'>{value}</span>
        )}
    </div>
)

const Contact = () => {
    return (
        <>
            <div className='flex flex-col m-3 p-2 md:w-2/5'>
                <ul className='flex gap-2.5 text-xs'>
                    <li>
                        <NavLink
                            to={'/home'}
                            className={'hover:text-(--primary) text-gray-500'}>
                            Home
                        </NavLink>
                    </li>
                    <li>&gt;</li>
                    <li>Contact</li>
                </ul>
                <h1 className='mt-2.5'>Contact Details</h1>
                <p className='text-xs text-gray-500'>State Common Entrance Test Cell, Maharashtra</p>
            </div>

            <div className='flex flex-col md:flex-row gap-6 m-1'>

                {/* Address */}
                <div className='flex flex-col gap-3 md:w-2/5 border-2 border-gray-300 bg-(--background) p-4 rounded-2xl'>
                    <h2 className='text-xs font-bold text-[#1B4FD8] uppercase tracking-wider'>
                        Office Address
                    </h2>
                    <p className='text-sm text-gray-800 leading-relaxed'>
                        State Common Entrance Test Cell, Maharashtra<br />
                        8th Floor, New Excelsior Building,<br />
                        A. K. Nayak Marg, Fort,<br />
                        Mumbai – 400 001
                    </p>
                </div>

                {/* Helplines */}
                <div className='flex flex-col gap-4 md:w-3/5 border-2 border-gray-300 bg-(--background) p-4 rounded-2xl'>
                    <h2 className='text-xs font-bold text-[#1B4FD8] uppercase tracking-wider'>
                        Helpline Numbers
                    </h2>

                    <InfoRow
                        label='CAP (Admission) Helpline'
                        value='Course-wise helpline numbers are listed on the respective admission page'
                    />

                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
                        <InfoRow label='CET (Examination) Helpline' value='07969134401' href='tel:07969134401' />
                        <InfoRow label=' ' value='07969134402' href='tel:07969134402' />
                    </div>

                    <InfoRow label='Toll-Free Number' value='1800 209 0191' href='tel:18002090191' />

                    <InfoRow label='Official Email' value='cetcell@mahacet.org' href='mailto:cetcell@mahacet.org' />
                </div>
            </div>

            {/* Candidate note */}
            <div className='border-2 border-amber-200 bg-amber-50 m-1 mt-4 p-4 rounded-2xl'>
                <p className='text-xs text-amber-800 leading-relaxed'>
                    The email above is for official use only. If you're a candidate with a query, please
                    visit the{' '}
                    <NavLink to='/help' className='underline font-medium'>
                        Candidate Help Module
                    </NavLink>
                    , call one of the helpline numbers, or email{' '}
                    <a href='mailto:cethelpdesk@maharashtracet.org' className='underline font-medium'>
                        cethelpdesk@maharashtracet.org
                    </a>
                    .
                </p>
            </div>
        </>
    )
}

export default Contact
import React from 'react'

const Card = ({ icon, title, description, accent }) => {
    return (
        <div
            className='relative flex flex-col gap-2 p-5 pt-4 rounded-2xl bg-(--foreground)/3 overflow-hidden min-w-35 transition-all duration-200 hover:bg-(--foreground)/6 hover:-translate-y-0.5'
        >

            <span
                className='absolute top-0 left-0 h-0.75 w-full'
                style={{ backgroundColor: accent }}
            />

            <div style={{ color: accent }}>
                {icon}
            </div>

            <h2 className='text-3xl font-bold tabular-nums tracking-tight text-(--foreground)'>
                {title}
            </h2>

            <p className='text-xs font-medium tracking-wide text-(--foreground)/50'>
                {description}
            </p>
        </div>
    )
}

export default Card

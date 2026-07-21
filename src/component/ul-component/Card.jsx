import React from 'react'

const Card = (props) => {
    return (
        <div className='border-4 w-fit h-full bg-(--background) border-gray-700 m-1 p-2.5 rounded-3xl flex flex-col justify-center items-center '>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card

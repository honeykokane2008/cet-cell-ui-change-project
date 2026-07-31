import React from 'react'

const Topbar = () => {
    return (
        <div className='Topbar p-1 flex gap-2.5 justify-around items-center bg-(--background) border-transparent rounded-(--radius)'>
            {/* this url need to change to public one */}
            <img className="h-8 w-auto" alt='satyamev-jayte-removebg-preview' src='src\photos\satyamev-jayte-removebg-preview.png-1.webp'></img>
            <span className='line-clamp-1 '>This website is for practice and educational purpose</span>

            {/* this url need to change to public one */}
            <img className="h-8 w-auto" alt='Seal_of_Maharashtra' src='src\photos\Seal_of_Maharashtra.svg.png-removebg-preview.png.webp'></img>
        </div>
    )
}

export default Topbar


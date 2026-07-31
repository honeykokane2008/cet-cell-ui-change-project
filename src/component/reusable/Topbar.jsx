import React from 'react'

const Topbar = () => {
    return (
        <div className='Topbar p-1 flex gap-2.5 justify-around items-center bg-(--background) border-transparent rounded-(--radius)'>
           
            <img className="h-8 w-auto" alt='https://cetcell.mahacet.org/wp-content/uploads/2025/01/satyamev-jayte-removebg-preview.png-1.webp' src='src\photos\satyamev-jayte-removebg-preview.png-1.webp'></img>
            <span className='line-clamp-1 '>This website is for practice and educational purpose</span>

        
            <img className="h-8 w-auto" alt='Seal_of_Maharashtra' src='https://cetcell.mahacet.org/wp-content/uploads/2025/01/Seal_of_Maharashtra.svg.png-removebg-preview.png.webp'></img>
        </div>
    )
}

export default Topbar


// import React from 'react'

// const Card = ({ icon, title, description, accent }) => {
//     return (
//         <div
//             className='relative flex flex-col gap-2 p-5 pt-4 rounded-2xl bg-(--foreground)/3 overflow-hidden min-w-35 transition-all duration-200 hover:bg-(--foreground)/6 hover:-translate-y-0.5'
//         >

          
//             <div style={{ color: accent }}>
//                 {icon}
//             </div>

//             <h2 className='text-3xl font-bold tabular-nums tracking-tight text-(--foreground)'>
//                 {title}
//             </h2>

//             <p className='text-xs font-medium tracking-wide text-(--foreground)/50'>
//                 {description}
//             </p>
//         </div>
//     )
// }

// export default Card



// const Card = ({ accent, icon, title, description }) => {
//   return (
//     <div className='w-full h-full flex flex-col gap-3 p-4 rounded-2xl border border-(--foreground)/10 bg-(--foreground)/2'>
//       <span
//         className='flex items-center justify-center w-10 h-10 rounded-xl'
//         style={{ backgroundColor: `${accent}1A`, color: accent }}
//       >
//         {icon}
//       </span>
//       <div className='flex flex-col'>
//         <span className='text-2xl font-bold text-(--foreground) tabular-nums'>
//           {title}
//         </span>
//         <span className='text-xs text-(--foreground)/45'>
//           {description}
//         </span>
//       </div>
//     </div>
//   )
// }

// export default Card


const Card = ({ accent, icon, title, description }) => {
  return (
    <div className='w-full h-full flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl border border-(--foreground)/10 bg-(--foreground)/2'>
      <span
        className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl'
        style={{ backgroundColor: `${accent}1A`, color: accent }}
      >
        {icon}
      </span>
      <div className='flex flex-col'>
        <span className='text-lg sm:text-2xl font-bold text-(--foreground) tabular-nums'>
          {title}
        </span>
        <span className='text-[10px] sm:text-xs text-(--foreground)/45'>
          {description}
        </span>
      </div>
    </div>
  )
}

export default Card
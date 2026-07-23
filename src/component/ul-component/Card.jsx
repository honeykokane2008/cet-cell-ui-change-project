import Icon from "../../data/Icon"

const Card = ({ accent = '#43484D', icon, title, description }) => {
  return (
    <div className='w-full h-full flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl border border-(--foreground)/10 bg-(--foreground)/2'>
      <span
        className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl'
        style={{ backgroundColor: `${accent}1A`, color: accent }}
      >
        <Icon name={icon} size={20} />
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

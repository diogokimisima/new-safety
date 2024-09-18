export function CardServices({ image, title, description }) {
    return (
        <div className='flex flex-col gap-y-5 items-center border-1 border-gray-400' >
            <img className='lg:h-20 h-16' src={image} alt="logo" />
            <h3 className='text-blue-950 font-bold lg:text-3xl text-2xl'>{title}</h3>
            <p className='text-center max-w-[500px] px-4 text-sm lg:text-base'>{description}</p>
        </div>
    )
}
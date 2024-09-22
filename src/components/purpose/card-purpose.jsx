export function CardServices({ image, title, description }) {
    return (
        <div className='flex flex-col gap-y-5 items-center' >
            <img className='lg:h-20 h-16' src={image} alt="logo" />
            <h3 className='text-gray-700 font-bold lg:text-3xl text-2xl'>{title}</h3>
            <p className='text-center max-w-[500px] px-4 text-sm lg:text-base'>{description}</p>
        </div>
    )
}
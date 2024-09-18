export function ContactCard({ image, name ,description, positionJob }){
    return(
        <div className='flex flex-col justify-center items-center '>
        <img className='rounded-full w-36' src={image} alt="foto-perfil"/>
        <h2 className='text-blue-950 font-bold text-xl mt-8'>{name}</h2>
        <span className='text-emerald-800 font-bold'>{positionJob}</span>

        <p className='text-center mt-10 px-7 sm:px-36'>{description}</p>
    </div>
    )
}
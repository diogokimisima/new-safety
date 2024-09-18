export function ContactCard({ image, name ,description, positionJob }){
    return(
        <div className='flex flex-col items-center'>
            <img className='rounded-full w-36 h-36 object-cover' src={image} alt="foto-perfil"/>
            <h2 className='text-blue-950 font-bold text-xl mt-8'>{name}</h2>
            <span className='text-emerald-800 font-bold'>{positionJob}</span>

            <p className='text-center mt-10 max-w-[550px] text-sm lg:text-base px-4'>{description}</p>
        </div>
    )
}
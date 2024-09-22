import ImageBanner from '../assets/banner2.png'

export function Banner() {
    return (
        <div>
            <img className='h-40 w-full object-cover object-right sm:object-contain sm:h-full' src={ImageBanner} alt="banner" />
        </div>
    )
}
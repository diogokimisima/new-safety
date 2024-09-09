import Icon from '../assets/logo-whats.png'

export function WhatsIcon(){
    return (
        <div className='z-50 fixed w-16 h-16 bottom-5 right-5 bg-[#26d368] rounded-full p-2'>
           <a href="https://wa.me/18996358838"><img src={Icon} alt="icon whats" /></a> 
        </div>
    )
}
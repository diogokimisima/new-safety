import PropTypes from 'prop-types';

export function CardServices({ image, title, description }) {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-80 w-72 border-1 border-gray-400'>
            <img src={image} alt="logo" />
            <h3 className='text-blue-950 font-bold text-3xl'>{title}</h3>
            <p className='text-center'>{description}</p>
        </div>
    )
}

CardServices.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

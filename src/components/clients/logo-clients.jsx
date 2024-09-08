import PropTypes from 'prop-types';

export function LogoClients({ image })
{
    return(
        <div>
            <img className='h-28 w-28 object-contain sm:h-36 sm:w-36' src={image} alt="logo" />
        </div>
    )
}

LogoClients.propTypes = {
    image: PropTypes.string.isRequired,
  };
  
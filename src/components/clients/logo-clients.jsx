import PropTypes from 'prop-types';

export function LogoClients({ image })
{
    return(
        <div>
            <img className='h-36 w-36 object-contain' src={image} alt="logo" />
        </div>
    )
}

LogoClients.propTypes = {
    image: PropTypes.string.isRequired,
  };
  
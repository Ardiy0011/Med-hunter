import React, { useContext, useState } from 'react';
import { UserContext } from '../components/UserContext';
import './card.css';

const PlaceCard = ({ place }) => {
  // renders the place card containing the place name, address, rating, and a button 
  // to get directions of hospitals
  const { userLocation: contextUserLocation } = useContext(UserContext);
  const [info, setInfo] = useState(false);
  const [btn, setBtn] = useState(true);

  function getDirectionsUrl(latitude, longitude) {
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  }

  const handleProfileClick = () => {
    setInfo(true);
    setBtn(false);
  };

  return (
    <div className="place-card">
      <img
        src={place.icon}
        alt={place.name}
        style={{ width: '100px', margin: '0 auto', marginBottom: '3px' }}
        className="card-img-top"
      />
       <p className='openstatus'>{place.opening_hours?.open_now ? 'Open' : 'Closed'}</p>
      <hr />
      <h2>{place.name}</h2>
      
      {btn && (
        <button className='btn' onClick={handleProfileClick}>
          Profile
        </button>
      )}

      {info && (
        <div id="moreinfo">
          <p>{place.vicinity}</p>
          <p>Emergency service rating: {place.rating}</p>
          <button
            className='btns'
            onClick={() => window.open(getDirectionsUrl(contextUserLocation.lat, contextUserLocation.lng), '_blank')}
          >
            Get Directions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="24px"
              fill="#000000"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PlaceCard;

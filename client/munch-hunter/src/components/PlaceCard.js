import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import './card.css';

const PlaceCard = ({ place }) => {
  const { userLocation: contextUserLocation, setUserLocation } = useContext(UserContext);
  // The above line uses aliasing to avoid naming conflicts with the constant below
  

  function getDirectionsUrl(latitude, longitude) {
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  }

  return (
    <div className="place-card">
      <img
        src={place.icon}
        alt={place.name}
        style={{ width: '100px', margin: '0 auto', marginBottom: '3px' }}
        className="card-img-top"
      />
      <h2>{place.name}</h2>
      <p>{place.vicinity}</p>
      <p className="card-text">
        <a href={getDirectionsUrl(contextUserLocation.lat, contextUserLocation.lng)} target="_blank">
          Get Directions <i className="fa-solid fa-location-dot"></i>
        </a>
      </p>
      <p>{place.opening_hours?.open_now ? 'Open' : 'Closed'}</p>
      <p>Emmergency service rating:  {place.rating}</p>
    
    </div>
  );
};

export default PlaceCard;

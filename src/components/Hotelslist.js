// HotelsList.js
import React from 'react';
import MapComponent from './MapComponent';

const hotels = [
  { id: 1, position: [15.8181, 79.8154], zoom: 13, text: 'Hotel 1 in Addanki' },
  { id: 2, position: [16.8181, 80.8154], zoom: 13, text: 'Hotel 2 in Another City' },
  // Add more hotels as needed
];

const HotelsList = () => {
  return (
    <div>
      <h1>Hotels List</h1>
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <h2>{hotel.text}</h2>
          <MapComponent center={hotel.position} zoom={hotel.zoom} markerText={hotel.text} />
        </div>
      ))}
    </div>
  );
};

export default HotelsList;

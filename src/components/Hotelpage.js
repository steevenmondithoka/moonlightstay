// HotelPage.js
import React from 'react';
import MapComponent from './MapComponent';

const HotelPage = () => {
  // Data for Hotel 1
  const hotel1 = {
    position: [15.8181, 79.8154],
    zoom: 13,
    text: 'Hotel 1 in Addanki'
  };

  // Data for Hotel 2
  const hotel2 = {
    position: [16.8181, 80.8154],
    zoom: 13,
    text: 'Hotel 2 in Another City'
  };

  return (
    <div>
      <h1>Hotels</h1>
      <div>
        <h2>Hotel 1</h2>
        <MapComponent center={hotel1.position} zoom={hotel1.zoom} markerText={hotel1.text} />
      </div>
      <div>
        <h2>Hotel 2</h2>
        <MapComponent center={hotel2.position} zoom={hotel2.zoom} markerText={hotel2.text} />
      </div>
    </div>
  );
};

export default HotelPage;

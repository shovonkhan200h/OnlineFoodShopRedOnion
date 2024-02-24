import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 51.51199346339492,
    lng: 0.056509325374773836
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDCjR38_sAuS-aOk7LDlyvOVoWvcDUSKe0"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

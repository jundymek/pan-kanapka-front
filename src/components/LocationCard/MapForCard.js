import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function MapForCard({ location }) {
  const initialPosition = [location.latitude, location.longitude];

  return (
    <Map center={initialPosition} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      return (
      <Marker position={[location.latitude, location.longitude]} draggable={false}>
        <Popup>
          {location.address} <br /> {location.name}.
        </Popup>
      </Marker>
      );
    </Map>
  );
}

export default MapForCard;

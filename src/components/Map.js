import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import AddNewLocationForm from "./AddNewLocationForm";

function MyMap() {
  const [currentPos, setCurrentPos] = useState([52.237049, 21.017532]);
  const [address, setAddress] = useState(null);
  const [locationName, setLocationName] = useState("");

  return (
    <div>
      <Map center={currentPos} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={currentPos} draggable={false}>
          <Popup>
            {address ? address : ""} <br /> {locationName ? locationName : ""}.
          </Popup>
        </Marker>
      </Map>
      <AddNewLocationForm newMarker={setCurrentPos} setMarkerAddress={setAddress} setLocationName={setLocationName} />
    </div>
  );
}

export default MyMap;

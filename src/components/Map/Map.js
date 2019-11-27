import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import AddNewLocationForm from "../AddNewLocationForm/AddNewLocationForm";
import LocationsTable from "../LocationsTable/LocationsTable";
import { connect } from "react-redux";

function MyMap(props) {
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
        {props.locations.length
          ? props.locations.map((location, index) => {
              return (
                <Marker key={index} position={[location.latitude, location.longitude]} draggable={false}>
                  <Popup>
                    {location.address} <br /> {location.name}.
                  </Popup>
                </Marker>
              );
            })
          : null}
      </Map>
      <AddNewLocationForm newMarker={setCurrentPos} setMarkerAddress={setAddress} setLocationName={setLocationName} />
      <LocationsTable />
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations
});

export default connect(mapStateToProps)(MyMap);

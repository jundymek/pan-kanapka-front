import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

function MyMap(props) {
  const initialPosition = [52.237049, 21.017532];
  const initialZoom = 13
  return (
    <Map center={initialPosition} zoom={initialZoom} className="map" id="map">
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
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations
});

export default connect(mapStateToProps)(MyMap);

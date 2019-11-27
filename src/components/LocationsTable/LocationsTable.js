import React, { useEffect } from "react";

import "./LocationsTable.scss";
import { connect } from "react-redux";
import { fetchLocations, removeLocation } from "../../store/actions/locationActions";

function LocationsTable(props) {

  useEffect(() => {
    props.onFetchLocations();
  }, []);

  useEffect(() => {}, [props.locations]);

  console.log(props.locations);
  const tableBody = props.locations.length
    ? props.locations.map((location, index) => {
        return (
          <tr key={index} className="table__body-tr">
            <td className="table__body-td">{location.name}</td>
            <td className="table__body-td">{location.address}</td>
            <td className="table__body-td">
              <button onClick={() => props.onRemoveLocation(location.id)}>Delete</button>
            </td>
            <td className="table__body-td">
              <a href="{% url 'subscribe' place.id %}">Subscribe</a>
            </td>
          </tr>
        );
      })
    : null;
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__head-tr">
          <th className="table__head-th">name</th>
          <th className="table__head-th">address</th>
        </tr>
      </thead>
      <tbody className="table__body">{tableBody}</tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations,
  loading: state.locations.loading,
  error: state.locations.error
});

const mapDispatchToProps = dispatch => ({
  onFetchLocations: () => dispatch(fetchLocations()),
  onRemoveLocation: locationId => dispatch(removeLocation(locationId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsTable);

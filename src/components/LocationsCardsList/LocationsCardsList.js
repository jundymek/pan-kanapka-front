export function LocationsCardsList({ locations, renderLocationCard, subscribedLocations, setSubscribedLocations}) {
    return locations.map((location, index) => renderLocationCard(location, index, subscribedLocations.includes(location.id), setSubscribedLocations))
  }

export function LocationsCardsList({ locations, renderLocationCard, subscribedLocations, setSubscribedLocations}) {
  console.log(subscribedLocations)
    return locations.map((location, index) => renderLocationCard(location, index, subscribedLocations.includes(location.id), setSubscribedLocations))
  }

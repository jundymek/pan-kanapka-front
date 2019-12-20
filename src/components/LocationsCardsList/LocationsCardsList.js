
export function LocationsCardsList({ locations, renderLocationCard, subscribedLocations, setSubscribedLocations, numberSubscriptions}) {

    return locations.map((location, index) => renderLocationCard(location, index, subscribedLocations.includes(location.id), setSubscribedLocations, numberSubscriptions))
  }

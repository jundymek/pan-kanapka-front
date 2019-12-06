export function LocationsCardsList({ locations, renderLocationCard}) {
    return locations.map((location, index) => renderLocationCard(location, index))
  }

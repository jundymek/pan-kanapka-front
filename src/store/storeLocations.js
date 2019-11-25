const initialState = {
    locations: []
}

export const storeLocations = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE':
            console.log('Deleted')
            return {
                ...state,
                locations: state.locations.filter((location) => location.id !== action.location.id)
            }
    
        default:
            return state
    }
}

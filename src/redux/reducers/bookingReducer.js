import { SET_DURATION, SET_PROFESSIONALS, SET_MATERIAL, SET_TOTAL_COST, ADD_BOOKING_DETAIL, REMOVE_BOOKING_DETAIL } from '../actions/bookingActions';

const initialState = {
    duration: '1 hour', // Default value
    professionals: '1', // Default value
    material: 'No', // Default value
    totalCost: 0,
    services: [], // Array to hold dynamically added services
    frequency: 'One Time', // Default frequency
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DURATION:
            return {
                ...state,
                duration: `${action.payload} hour${action.payload > 1 ? 's' : ''}`,
            };
        case SET_PROFESSIONALS:
            return {
                ...state,
                professionals: action.payload,
            };
        case SET_MATERIAL:
            return {
                ...state,
                material: action.payload,
            };
        case SET_TOTAL_COST:
            return {
                ...state,
                totalCost: action.payload,
            };
        case ADD_BOOKING_DETAIL:
            return {
                ...state,
                services: [...state.services, action.payload], // Add new service
            };
        case REMOVE_BOOKING_DETAIL:
            return {
                ...state,
                services: state.services.filter(service => service.id !== action.payload), // Remove service by ID
            };
        case 'SET_FREQUENCY':
            return {
                ...state,
                frequency: action.payload,
            };
        default:
            return state;
    }
};

export default bookingReducer;

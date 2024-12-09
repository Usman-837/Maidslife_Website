// src/redux/reducers/bookingReducer.js

import { 
    SET_DURATION, 
    SET_PROFESSIONAL_COUNT, // Imported new Action Type
    SET_PROFESSIONALS, 
    SET_MATERIAL, 
    SET_TOTAL_COST, 
    ADD_BOOKING_DETAIL, 
    REMOVE_BOOKING_DETAIL, 
    SET_FREQUENCY,
    SET_SELECTED_DATE,
    SET_SELECTED_TIME
} from '../actions/bookingActions';

const initialState = {
    duration: '1 hour', // Default value
    professionalCount: 2, // New field for count
    professionals: [], // Array to hold professional names
    material: 'No', // Default value
    totalCost: 0,
    services: [], // Array to hold dynamically added services
    frequency: 'One Time', // Default frequency
    selectedDate: null, // Newly added
    selectedTime: null, // Newly added
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DURATION:
            return {
                ...state,
                duration: `${action.payload} hour${action.payload > 1 ? 's' : ''}`,
            };
        case SET_PROFESSIONAL_COUNT: // Handle Professional Count
            return {
                ...state,
                professionalCount: action.payload,
            };
        case SET_PROFESSIONALS:
            return {
                ...state,
                professionals: Array.isArray(action.payload) ? action.payload : [action.payload],
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
        case SET_FREQUENCY:
            return {
                ...state,
                frequency: action.payload,
            };
        case SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload,
            };
        case SET_SELECTED_TIME:
            return {
                ...state,
                selectedTime: action.payload,
            };
        default:
            return state;
    }
};

export default bookingReducer;

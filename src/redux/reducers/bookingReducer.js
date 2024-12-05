import { SET_DURATION, SET_PROFESSIONALS, SET_MATERIAL } from '../actions/bookingActions';
import { SET_TOTAL_COST } from '../actions/bookingActions';

const initialState = {
    duration: '1 hour', // Default value
    professionals: '1', // Default value
    material: 'No', // Default value
    totalCost: 0,
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
        default:
            return state;
    }
};

export default bookingReducer;

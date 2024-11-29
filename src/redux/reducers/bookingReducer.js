import { SET_DURATION, SET_PROFESSIONALS, SET_MATERIAL } from '../actions/bookingActions';

const initialState = {
    duration: '1 hour', // Default value
    professionals: '1', // Default value
    material: 'No', // Default value
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
        default:
            return state;
    }
};

export default bookingReducer;

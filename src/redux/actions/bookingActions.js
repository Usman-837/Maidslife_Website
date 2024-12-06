// Action Types
export const SET_DURATION = 'SET_DURATION';
export const SET_PROFESSIONALS = 'SET_PROFESSIONALS';
export const SET_MATERIAL = 'SET_MATERIAL';
export const SET_TOTAL_COST = 'SET_TOTAL_COST';
export const ADD_BOOKING_DETAIL = 'ADD_BOOKING_DETAIL';
export const REMOVE_BOOKING_DETAIL = 'REMOVE_BOOKING_DETAIL';


// Action Creators
export const setDuration = (duration) => ({
    type: SET_DURATION,
    payload: duration,
});

export const setProfessionals = (professionals) => ({
    type: SET_PROFESSIONALS,
    payload: professionals,
});

export const setMaterial = (material) => ({
    type: SET_MATERIAL,
    payload: material,
});

export const updateTotalCost = (amount) => ({
    type: SET_TOTAL_COST,
    payload: amount,
});

export const addBookingDetail = (service) => ({
    type: ADD_BOOKING_DETAIL,
    payload: service,
});

export const removeBookingDetail = (serviceId) => ({
    type: REMOVE_BOOKING_DETAIL,
    payload: serviceId,
});

export const setFrequency = (frequency) => ({
    type: 'SET_FREQUENCY',
    payload: frequency,
});

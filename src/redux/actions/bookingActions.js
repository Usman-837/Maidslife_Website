// src/redux/actions/bookingActions.js

// Action Types
export const SET_DURATION = 'SET_DURATION';
export const SET_PROFESSIONAL_COUNT = 'SET_PROFESSIONAL_COUNT'; // New Action Type for Count
export const SET_PROFESSIONALS = 'SET_PROFESSIONALS'; // Existing Action Type for Names
export const SET_MATERIAL = 'SET_MATERIAL';
export const SET_TOTAL_COST = 'SET_TOTAL_COST';
export const ADD_BOOKING_DETAIL = 'ADD_BOOKING_DETAIL';
export const REMOVE_BOOKING_DETAIL = 'REMOVE_BOOKING_DETAIL';
export const SET_FREQUENCY = 'SET_FREQUENCY';

// New Action Types for Date and Time
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_SELECTED_TIME = 'SET_SELECTED_TIME';

// Action Creators
export const setDuration = (duration) => ({
    type: SET_DURATION,
    payload: duration,
});

export const setProfessionalCount = (count) => ({ // New Action Creator for Count
    type: SET_PROFESSIONAL_COUNT,
    payload: count,
});

export const setProfessionals = (professionals) => ({ // Existing Action Creator for Names
    type: SET_PROFESSIONALS,
    payload: professionals, // Expecting an array of professional names
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
    type: SET_FREQUENCY,
    payload: frequency,
});

// New Action Creators for Selected Date and Time
export const setSelectedDate = (date) => ({
    type: SET_SELECTED_DATE,
    payload: date,
});

export const setSelectedTime = (time) => ({
    type: SET_SELECTED_TIME,
    payload: time,
});

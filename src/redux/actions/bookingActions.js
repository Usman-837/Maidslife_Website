// Action Types
export const SET_DURATION = 'SET_DURATION';
export const SET_PROFESSIONALS = 'SET_PROFESSIONALS';
export const SET_MATERIAL = 'SET_MATERIAL';

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

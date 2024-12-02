// actions/popularAddonsActions.js
export const toggleCard = (id) => ({
    type: 'TOGGLE_CARD',
    payload: id,
});

export const incrementCount = (id) => ({
    type: 'INCREMENT_COUNT',
    payload: id,
});

export const decrementCount = (id) => ({
    type: 'DECREMENT_COUNT',
    payload: id,
});

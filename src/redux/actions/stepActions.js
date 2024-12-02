// src/redux/actions/stepActions.js
export const NEXT_STEP = "NEXT_STEP";
export const PREV_STEP = "PREV_STEP";
export const RESET_STEP = "RESET_STEP";

export const nextStep = () => ({ type: NEXT_STEP });
export const prevStep = () => ({ type: PREV_STEP });
export const resetStep = () => ({ type: RESET_STEP });

// src/redux/reducers/stepReducer.js
import { NEXT_STEP, PREV_STEP, RESET_STEP } from "../actions/stepActions";

const initialState = {
  currentStep: 1, // Start at step 1
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1, // Increment step
      };
    case PREV_STEP:
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1), // Decrement but ensure it doesn't go below 1
      };
    case RESET_STEP:
      return {
        ...state,
        currentStep: 1, // Reset to step 1
      };
    default:
      return state;
  }
};

export default stepReducer;

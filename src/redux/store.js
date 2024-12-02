// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./reducers/stepReducer";
import bookingReducer from "./reducers/bookingReducer";

const store = configureStore({
  reducer: {
    step: stepReducer,      // Step management
    booking: bookingReducer // Booking details management
  },
});

export default store;

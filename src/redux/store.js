// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./reducers/stepReducer";
import bookingReducer from "./reducers/bookingReducer";
import popularAddonsReducer from './reducers/popularAddonsReducer';

const store = configureStore({
  reducer: {
    step: stepReducer,       // Step management
    booking: bookingReducer, // Booking details management
    popularAddons: popularAddonsReducer, // Add-ons state management
  },
});

export default store;

import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import hotelReducer from "./hotelSlice"
import bookingReducer from "./bookingSlice";

export default configureStore({
    reducer: {
        userStore: userReducer,
        hotelStore: hotelReducer,
        bookingStore: bookingReducer
    },
});
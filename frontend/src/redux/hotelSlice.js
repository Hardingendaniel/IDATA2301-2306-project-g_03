import {createSlice} from "@reduxjs/toolkit";

export const hotelSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
    },
    reducers: {
        setHotels: function (state, action) {
            state.hotels = action.payload;
        },
    },
});

export const {setHotels} = hotelSlice.actions;
export default hotelSlice.reducer;
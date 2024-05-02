import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: function (state, action) {
            state.user = action.payload;
        },
        unsetUser: function (state, action) {
            state.user = null;
        },
    },
});

export const { setUser, unsetUser} = userSlice.actions;
export default userSlice.reducer;
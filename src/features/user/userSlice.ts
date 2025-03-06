import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
    },
});

const { reducer, actions } = userSlice;

export const { setUser } = actions;
export default reducer;

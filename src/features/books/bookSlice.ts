import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    books: [],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<any>) => {
            state.books = action.payload;
        },
    },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;

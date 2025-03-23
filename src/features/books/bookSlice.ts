import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books } from "../../types/types";

const initialState = {
    books: [] as Books[],
    publicBooks: [] as Books[],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<any>) => {
            state.books = action.payload;
        },
        setPublicBooks: (state, action: PayloadAction<any>) => {
            state.publicBooks = action.payload;
        },
        addBooks: (state, action: PayloadAction<any>) => {
            state.books = [...state.books, action.payload];
        },
    },
});

export const { setBooks, addBooks, setPublicBooks } = bookSlice.actions;

export default bookSlice.reducer;

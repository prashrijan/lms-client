import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books } from "../../types/types";

const initialState = {
    books: [] as Books[], // for admin
    publicBooks: [] as Books[], // for public
    selectedBook: {} as Books, // single book,
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
        setSelectedBook: (state, action: PayloadAction<any>) => {
            state.selectedBook = action.payload || {};
        },
    },
});

export const { setBooks, addBooks, setPublicBooks, setSelectedBook } =
    bookSlice.actions;

export default bookSlice.reducer;

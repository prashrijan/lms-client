import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/user/userSlice";
import bookReducer from "../../features/books/bookSlice";

export const store = configureStore({
    reducer: {
        userData: userReducer,
        booksInfo: bookReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

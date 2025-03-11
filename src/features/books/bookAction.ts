import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store/store";
import { fetchBookApi } from "./bookApi";
import { setBooks } from "./bookSlice";

export const getBooksAdminAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        const res = await fetchBookApi();

        res && dispatch(setBooks(res));
    };

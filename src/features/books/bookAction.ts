import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store/store";
import { editBookApi, fetchBookApi } from "./bookApi";
import { addBooks, setBooks } from "./bookSlice";

export const getBooksAdminAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        const res = await fetchBookApi();

        res && dispatch(setBooks(res));
    };

export const updateBookAction =
    (
        payload: any,
        id: string | undefined
    ): ThunkAction<void, RootState, unknown, any> =>
    async (dispatch) => {
        const { data } = await editBookApi(payload, id);
        data && dispatch(addBooks(data));
    };

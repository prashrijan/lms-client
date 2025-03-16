import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store/store";
import {
    createBookApi,
    deleteBookApi,
    editBookApi,
    fetchBookApi,
} from "./bookApi";
import { addBooks, setBooks } from "./bookSlice";

export const getBooksAdminAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        const res = await fetchBookApi();

        res && dispatch(setBooks(res));
    };

export const createBookAction =
    (payload: any): ThunkAction<void, RootState, unknown, any> =>
    async (dispatch) => {
        const { data } = await createBookApi(payload);
        data && dispatch(addBooks(data));
    };

export const updateBookAction =
    (
        payload: any,
        id: string | undefined
    ): ThunkAction<void, RootState, unknown, any> =>
    async (dispatch) => {
        const { data } = await editBookApi(payload, id);
        data && dispatch(getBooksAdminAction());
    };

export const deleteBookAction =
    (id: string | undefined): ThunkAction<void, RootState, unknown, any> =>
    async (dispatch) => {
        const { success } = await deleteBookApi(id);

        success && dispatch(getBooksAdminAction());
    };

import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store/store";
import {
    createBookApi,
    deleteBookApi,
    editBookApi,
    fetchBookApi,
    fetchPublicBookApi,
    getSingleBook,
} from "./bookApi";
import {
    addBooks,
    setBooks,
    setPublicBooks,
    setSelectedBook,
} from "./bookSlice";

export const getBooksAdminAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        const res = await fetchBookApi();

        res && dispatch(setBooks(res));
    };
export const getBooksPublicAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        const res = await fetchPublicBookApi();

        res && dispatch(setPublicBooks(res));
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

export const getSingleBookAction =
    (slug: string | undefined): ThunkAction<void, RootState, unknown, any> =>
    async (dispatch) => {
        const { data } = await getSingleBook(slug);

        dispatch(setSelectedBook(data));
    };

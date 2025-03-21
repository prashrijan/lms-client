import { fetchUserApi } from "./userApi";

import { ThunkAction } from "redux-thunk";
import { RootState } from "../../redux/store/store.ts";
import { token } from "../../types/types.ts";
import { refreshTokenApi } from "../../services/authApi.ts";
import { setUser } from "./userSlice.ts";

// call back function that will be dispatched when logging in
export const fetchUserAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        try {
            // call api

            const { success, data } = await fetchUserApi();

            // dispatch set user action with data from the api
            success && data?._id && dispatch(setUser(data));
        } catch (error) {
            console.log(error);
            return error;
        }
    };

// autlogoin feature
export const autoLoginUser =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        try {
            const accessToken: token = sessionStorage.getItem("accessToken");

            if (accessToken) {
                dispatch(fetchUserAction());
                return;
            }

            const refreshToken: token = localStorage.getItem("refreshToken");
            if (refreshToken) {
                const { data } = await refreshTokenApi();
                sessionStorage.setItem("accessToken", data);
                dispatch(fetchUserAction());
            }
        } catch (error) {
            console.error("Auto-login failed", error);
        }
    };

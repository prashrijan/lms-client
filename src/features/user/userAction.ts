import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../redux/store/store.ts";
import { token } from "../../types/types.ts";
import { refreshTokenApi } from "../../services/authApi.ts";

// call back function that will be dispatched when logging in
export const fetchUserAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        // call api
        const { success, data } = await fetchUserApi();

        // dispatch set user action with data from the api
        success && data?._id && dispatch(setUser(data));
    };

// autlogoin feature
export const autoLoginUser =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        const accessToken: token = sessionStorage.getItem("accessToken");

        // if we have accesstoken fetch user profile
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
    };

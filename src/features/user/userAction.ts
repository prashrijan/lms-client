import { fetchUserApi } from "./userApi";
import { setLoading, setUser } from "./userSlice";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../redux/store/store.ts";
import { token } from "../../types/types.ts";
import { refreshTokenApi } from "../../services/authApi.ts";

// call back function that will be dispatched when logging in
export const fetchUserAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        try {
            // call api
            dispatch(setLoading(true));
            const { success, data } = await fetchUserApi();

            // dispatch set user action with data from the api
            success && data?._id && dispatch(setUser(data));
        } catch (error) {
            console.log(error);
            return error;
        } finally {
            dispatch(setLoading(false));
        }
    };

// autlogoin feature
export const autoLoginUser =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const accessToken: token = sessionStorage.getItem("accessToken");

            if (accessToken) {
                console.log("access");
                dispatch(fetchUserAction());
                return;
            }

            const refreshToken: token = localStorage.getItem("refreshToken");
            if (refreshToken) {
                console.log("refresh");
                const { data } = await refreshTokenApi();
                sessionStorage.setItem("accessToken", data);
                dispatch(fetchUserAction());
            }
        } catch (error) {
            console.error("Auto-login failed", error);
        } finally {
            dispatch(setLoading(false));
        }
    };

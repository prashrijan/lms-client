import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../redux/store/store.ts";

// call back function that will be dispatched when logging in
export const fetchUserAction =
    (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        // call api
        const { success, data } = await fetchUserApi();

        // dispatch set user action with data from the api
        success && data?._id && dispatch(setUser(data));
    };

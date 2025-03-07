import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../redux/store/store.ts";

// call back function that will be dispatched when logging in
export const fetchUserAction =
    (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
        // call api
        const { success, data } = await fetchUserApi();

        // dispatch set user action with data from the api
        success && data?._id && dispatch(setUser(data));
    };

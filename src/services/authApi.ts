// all API call relatted to signup, login, token

import { apiProcessor, HTTPMethods } from "./apiProcessor";

const BASE_URL = "http://localhost:8000";
const AUTH_API_ENDPOINT = BASE_URL + "/api/v1/auth";

export const signUpUserAPI = async (payload: any) => {
    const result = await apiProcessor({
        url: AUTH_API_ENDPOINT + "/register",
        method: HTTPMethods.POST,
        payload,
    });
    return result;
};

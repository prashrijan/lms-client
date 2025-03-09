import axios from "axios";
import { toast } from "react-toastify";
import { token } from "../types/types";

export enum HTTPMethods {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
}

interface IApi {
    url: string;
    method: HTTPMethods;
    payload?: any;
    showToast?: boolean;
    isPrivate?: boolean;
    isRefreshToken?: boolean;
}

const getAccessToken = (): token => {
    return sessionStorage.getItem("accessToken");
};
const getRefreshToken = (): token => {
    return localStorage.getItem("refreshToken");
};

export const apiProcessor = async ({
    url,
    method,
    payload,
    showToast = true,
    isPrivate = false,
    isRefreshToken = false,
}: IApi) => {
    try {
        const headers: { authorization?: token } = {};
        let token: token = null;
        if (!isPrivate) {
            token = null;
        } else if (isRefreshToken) {
            token = getRefreshToken();
        } else {
            token = getAccessToken();
        }

        headers.authorization = token;
        const { data } = await axios({
            url,
            method,
            data: payload,
            headers,
        });

        data &&
            showToast &&
            toast.success(data.message, {
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                progress: undefined,
            });

        return data;
    } catch (error) {
        console.error(error);

        if (axios.isAxiosError(error) && error.response) {
            const errorMessage =
                error.response.data?.message ||
                error.message ||
                "An error occured please try again.";
            toast.error(errorMessage, {
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                progress: undefined,
            });
        }
    }
};

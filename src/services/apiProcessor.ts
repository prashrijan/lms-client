import axios from "axios";
import { toast } from "react-toastify";

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
}

type token = string | null;

const getAccessToken = (): token => {
    return sessionStorage.getItem("accessToken");
};
export const apiProcessor = async ({
    url,
    method,
    payload,
    showToast = true,
    isPrivate = false,
}: IApi) => {
    try {
        const headers: { authorization?: token } = {};

        if (isPrivate) {
            headers.authorization = getAccessToken();
        }
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

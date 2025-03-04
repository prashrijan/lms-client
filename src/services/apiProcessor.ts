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
}

export const apiProcessor = async ({ url, method, payload }: IApi) => {
    try {
        const { data } = await axios({
            url,
            method,
            data: payload,
            // headers,
        });
        console.log(data);

        data &&
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
            return errorMessage;
        }
    }
};

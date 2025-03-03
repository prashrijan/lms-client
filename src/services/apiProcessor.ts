import axios from "axios";

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
        const response = await axios({
            url,
            method,
            data: payload,
            // headers,
        });
        console.log(response);
    } catch (error) {
        console.error(error);
        if (axios.isAxiosError(error)) {
            return error.message;
        }
        return "An unknown error occurred";
    }
};

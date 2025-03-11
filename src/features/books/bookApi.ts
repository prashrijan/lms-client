import { apiProcessor, HTTPMethods } from "../../services/apiProcessor";

const apiBaseUrl = "http://localhost:8000/api/v1";
const bookEndPoint = apiBaseUrl + "/books";

// private
export const fetchBookApi = async (): Promise<any> => {
    const { data } = await apiProcessor({
        url: bookEndPoint + "/get-books-admin",
        method: HTTPMethods.GET,
        showToast: false,
        isPrivate: true,
    });
    return data;
};

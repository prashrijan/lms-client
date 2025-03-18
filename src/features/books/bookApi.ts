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

// create book
export const createBookApi = async (payload: any): Promise<any> => {
    const res = await apiProcessor({
        url: bookEndPoint + "/create-book",
        method: HTTPMethods.POST,
        isPrivate: true,
        payload,
    });
    return res;
};
// update book
export const editBookApi = async (
    payload: any,
    id: string | undefined
): Promise<any> => {
    const res = await apiProcessor({
        url: bookEndPoint + `/update-book/${id}`,
        method: HTTPMethods.POST,
        isPrivate: true,
        payload,
    });
    return res;
};

// delete book
export const deleteBookApi = async (id: string | undefined) => {
    const res = await apiProcessor({
        url: bookEndPoint + `/delete-book/${id}`,
        method: HTTPMethods.DELETE,
        isPrivate: true,
    });

    return res;
};

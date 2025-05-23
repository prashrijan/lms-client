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

// public
export const fetchPublicBookApi = async (): Promise<any> => {
    const { data } = await apiProcessor({
        url: bookEndPoint + "/get-books-user",
        method: HTTPMethods.GET,
        showToast: false,
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
        contentType: "multpart/form-data",
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
        method: HTTPMethods.PATCH,
        isPrivate: true,
        payload,
        contentType: "multipart/form-data",
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

// get single book
export const getSingleBook = async (slug: string | undefined) => {
    const res = await apiProcessor({
        url: bookEndPoint + `/get-book-slug/${slug}`,
        method: HTTPMethods.GET,
        showToast: false,
    });

    return res;
};

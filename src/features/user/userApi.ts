import { apiProcessor, HTTPMethods } from "../../services/apiProcessor";

const apiBaseUrl = "http://localhost:8000/api/v1";
const userEndPoint = apiBaseUrl + "/users";

export const fetchUserApi = async (): Promise<any> => {
    return await apiProcessor({
        url: userEndPoint + "/profile",
        method: HTTPMethods.GET,
        showToast: false,
        isPrivate: true,
    });
};

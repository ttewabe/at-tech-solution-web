import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL = "http://localhost:5189/api";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 100000, // Set a timeout for requests (optional)
});

// Add an interceptor to handle errors or token refreshing if needed
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful response
        return response;
    },
    (error: AxiosError) => {
        // Handle error response
        return Promise.reject(error);
    }
);

// Define methods for API requests

// GET request
export const getData = async (endpoint: string) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// POST request
export const postData = async (endpoint: string, data: any) => {
    try {
        console.log("data", data);
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// PUT request
export const putData = async (endpoint: string, data: any) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// DELETE request
export const deleteData = async (endpoint: string) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        throw error;
    }
};

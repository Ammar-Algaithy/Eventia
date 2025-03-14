import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

// Utility to simulate a delay
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

// Axios response interceptor
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000); // Simulate API delay
    return response;
  } catch (error) {
    console.error(error);
    return await Promise.reject(error);
  }
});

// Helper to extract response body
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// Requests object with HTTP methods
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

// Activities API endpoints
const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => requests.post<void>("/activities", activity),
  update: (activity: Activity) =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.delete<void>(`/activities/${id}`),
};

// Exporting the agent
const agent = {
  Activities,
};

export default agent;

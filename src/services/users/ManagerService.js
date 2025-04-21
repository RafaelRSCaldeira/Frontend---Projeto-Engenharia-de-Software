import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/users/manager";

export const listManagers = () => axios.get(REST_API_BASE_URL);

export const createManager = (manager) => axios.post(REST_API_BASE_URL, manager)

export const getManager = (managerId) => axios.get(REST_API_BASE_URL + `/${managerId}`);

export const updateManager = (managerId, manager) => axios.put(REST_API_BASE_URL + `/${managerId}`, manager)

export const deleteManager = (managerId) => axios.delete(REST_API_BASE_URL + `/${managerId}`)
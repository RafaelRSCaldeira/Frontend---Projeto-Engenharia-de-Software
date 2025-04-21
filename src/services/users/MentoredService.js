import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/users/mentored";

export const listMentoreds = () => axios.get(REST_API_BASE_URL);

export const createMentored = (mentored) => axios.post(REST_API_BASE_URL, mentored)

export const getMentored = (mentoredId) => axios.get(REST_API_BASE_URL + `/${mentoredId}`);

export const updateMentored = (mentoredId, mentored) => axios.put(REST_API_BASE_URL + `/${mentoredId}`, mentored)

export const deleteMentored = (mentoredId) => axios.delete(REST_API_BASE_URL + `/${mentoredId}`)
import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/users/mentor";

export const listMentors = () => axios.get(REST_API_BASE_URL);

export const createMentor = (mentor) => axios.post(REST_API_BASE_URL, mentor)

export const getMentor = (mentorId) => axios.get(REST_API_BASE_URL + `/${mentorId}`);

export const updateMentor = (mentorId, mentor) => axios.put(REST_API_BASE_URL + `/${mentorId}`, mentor)

export const deleteMentor = (mentorId) => axios.delete(REST_API_BASE_URL + `/${mentorId}`)
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchJobsAPI  = () => axios.get(BASE_URL);
export const addJobAPI = (job) => axios.post(BASE_URL,job);
export const deleteJobAPI = (id) => axios.delete(`${BASE_URL}/${id}`)
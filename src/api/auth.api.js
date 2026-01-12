import axios from "axios";
const API_BASE = "https://web-ho-ly.onrender.com"

export const loginApi = (username, password) => {
    return axios.post(`${API_BASE}/user/login`, {
        username,
        password,
    });
}
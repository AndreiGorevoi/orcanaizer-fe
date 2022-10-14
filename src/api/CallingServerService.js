import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export function getMethod(url) {
    return axios.get(`${SERVER_URL}/${url}`)
}

export function deleteMethod(url) {
    return axios.delete(`${SERVER_URL}/${url}`)
}

export function putMethod(url, data) {
    return axios.put(`${SERVER_URL}/${url}`, data)
}
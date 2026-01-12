import axios from 'axios'
import { getToken } from '../utils/auth'

const BASE_URL = import.meta.env.VITE_API_URL + '/projects'

export const getProjects = () => {
    return axios.get(BASE_URL)
}

export const showProject = (projectId) => {
    return axios.get(`${BASE_URL}/${projectId}`)
}

export const createProject = (projectId) => {
    return axios.post(BASE_URL, FormData, {
        headers: {
            Authorization: `Bearer`
        }
    })
}

export const updateProject = (projectId, formData) => {
    const token = getToken()
    return axios.put(`${BASE_URL}/${projectId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
    }

export const deleteProject = (projectId) => {
    return axios.delete(`${BASE_URL}/${projectId}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })
}
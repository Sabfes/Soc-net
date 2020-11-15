import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "71a0323c-7ff9-4763-8740-70e9a845b5eb",
    }
})

export const getUsers = ({currentPage=1, pageSize=100}) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
}

export const getAuth = () => {
    return instance.get('auth/me')
}
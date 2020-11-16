import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "71a0323c-7ff9-4763-8740-70e9a845b5eb",
    }
})

export const userApi = {
    getUsers: (currentPage=1, pageSize=100) => {return instance.get(`users?page=${currentPage}&count=${pageSize}`)},
    getProfile: (userId) => {return instance.get(`profile/${userId}`)},
    getAuth: ()=> {return instance.get('auth/me')},
    follow: (userId) => {return instance.post(`follow/${userId}`)},
    unFollow: (userId) => {return instance.delete(`follow/${userId}`)},
}
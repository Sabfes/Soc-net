import {instance, ResponseType} from "./api";

export const usersApi = {
    getUsers: (currentPage: number = 1, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow: (userId: number) => {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data) as Promise<ResponseType>
    },
};
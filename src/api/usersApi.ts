import {instance, ResponseType} from "./api";

export const usersApi = {
    getUsers: (currentPage: number = 1, pageSize: number = 100, term: string = '', friend: null | boolean = null) => {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}&term=${term}` +
            (friend === null ? '' : `&friend=${friend}`)
        )
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

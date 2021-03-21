import {instance, ResponseType} from "./api";

type GetAuthResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authApi = {
    getAuth: ()=> {
        return instance.get<ResponseType<GetAuthResponseDataType>>('auth/me')
            .then(res => res.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
    },
};
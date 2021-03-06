import {instance} from "./api";

export const authApi = {
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete(`auth/login`)
    },
    getAuth: ()=> {
        return instance.get('auth/me')
    },
};
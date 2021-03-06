import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "71a0323c-7ff9-4763-8740-70e9a845b5eb",
    }
})

export enum ResultCodeEnum {
    SUCCESS = 0,
    ERROR = 1,
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

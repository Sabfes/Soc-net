import {instance} from "./api";

export const profileApi = {
    getProfile: (userId: number) => {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus: (status: string) => {
        return instance.put(`profile/status`,{status})
    },
    updateProfileInfo: (data: any) => {
        return instance.put(`profile/`, data)
    },
    savePhoto: (photo: any) => {
        const formData = new FormData()
        formData.append("image", photo)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};
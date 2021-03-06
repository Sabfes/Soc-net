import {instance, ResponseType} from "./api";
import {PhotosType, ProfileDataType} from "../types/types";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileApi = {
    getProfile: (userId: number) => {
        return instance.get<ProfileDataType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getProfileStatus: (userId: number) => {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateProfileStatus: (status: string) => {
        return instance.put<ResponseType>(`profile/status`,{status})
            .then(res => res.data)
    },
    updateProfileInfo: (data: any) => {
        return instance.put(`profile/`, data)
            .then(res => res.data)
    },
    savePhoto: (photo: any) => {
        const formData = new FormData()
        formData.append("image", photo)

        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
};
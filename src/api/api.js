import axios  from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":"e5ac2163-79b7-4c5e-83c4-80e218bc188d"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followDelete(id = 1){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followPost(id = 1){
        return instance.post(`/follow/${id}`).then(response => response.data)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    }
}

export const HeaderAPI = {
    authMe(){
        return instance.get(`auth/me`).then(response => response.data)
    }
}
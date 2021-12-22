import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '537bb101-34d5-4e34-81ad-544337f8e7e9'
    }
});

export const UsersAPI = {
    getUsers (selectedPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    Follow (userId) {
        return instance.post(`follow/${userId}`, {},)
            .then(response => response.data);
    },

    UnFollow (userId)  {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
}


import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '537bb101-34d5-4e34-81ad-544337f8e7e9'
    }
});

export const AuthAPI = {
    AuthMe () {
        return instance.get(`auth/me`);
    },

    Login (email, password) {
        return instance.post('/auth/login', {email, password}).then(res=>console.log(res));
    }

}

export const UsersAPI = {

    GetProfileData (id) {
        console.warn('Obsolete method, please use ProfileApi object here');
        return  ProfileApi.GetProfileData(id);
    },

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

export const ProfileApi = {

    GetStatus(userId=2) {
        return instance.get(`profile/status/${userId}`);
    },

    UpdateStatus(newStatus) {
        return instance.put(`profile/status`, {status: newStatus});
    },

    GetProfileData (id) {
        return  instance.get(`profile/${id}`).then(response => response.data);
    },
};







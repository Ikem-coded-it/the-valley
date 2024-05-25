import axios from "axios";
import $http from "./$http";

class AuthService{
    API_URL: string = import.meta.env['VITE_BASE_API_URL']

    public async login(payload) {
        const response = await axios.post(this.API_URL + "/auth/linkedin", payload)
        if(response?.status == 200)
            return response.data;
    }

    public async logout() {
        const response = await $http.get("/auth/logout")
        console.log(response)
        if(response.status == 200)
            return response
    }
}

const authService = new AuthService()

export default authService

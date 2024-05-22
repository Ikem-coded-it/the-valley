import $http from "./$http";

class UserService {
    async getMe() {
        const response = await $http.get("/auth/me")
        if(response.status == 200)
            return response.data
    }

    async saveOnboardingData(payload) {
        const response = await $http.post("/user/onboarding", payload)
        if(response.status === 200)
            return response.data
    }
}

const userService = new UserService();

export default userService;
import ApiService from "../axios";

const LoginService = {
    login: (loginParam) => {
        return ApiService.post("/api/v1/login", loginParam);
    }
}

export default LoginService;
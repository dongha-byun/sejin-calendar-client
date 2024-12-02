import ApiService from "../axios";

export const ACCESS_TOKEN_KEY = "accessToken";

const LoginService = {
    login: (loginParam) => {
        return ApiService.post("/api/v1/login", loginParam).then((res) => {
            localStorage.setItem(ACCESS_TOKEN_KEY, res.data.accessToken);
        });
    }
}

export default LoginService;
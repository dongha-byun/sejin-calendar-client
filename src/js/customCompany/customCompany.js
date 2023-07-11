import ApiService from "../axios";

const CustomCompanyService = {
    save: (param) => {
        return ApiService.post("/api/v1/custom-company", param);
    }
}

export default CustomCompanyService;
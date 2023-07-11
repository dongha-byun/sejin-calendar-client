import ApiService from "../axios";

const PaperService = {
    getPapers: () => {
        return ApiService.get("/api/v1/papers");
    },
    savePaper: (param) => {
        return ApiService.post("/api/v1/paper", param);
    }
}

export default PaperService;
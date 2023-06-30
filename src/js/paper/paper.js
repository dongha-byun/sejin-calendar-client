import ApiService from "../axios";

const PaperService = {
    getPapers: () => {
        return ApiService.get("/api/v1/papers");
    }
}

export default PaperService;
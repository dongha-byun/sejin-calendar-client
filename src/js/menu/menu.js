import ApiService from "../axios";

const MenuService = {
    getMainMenus: () => {
        return ApiService.get("/api/v1/mainMenus");
    }
}

export default MenuService;
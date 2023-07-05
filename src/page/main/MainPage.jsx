import React, { useEffect, useState } from "react";
import './mainMenuStyle.css';
import MenuService from "../../js/menu/menu";
import MenuComponent from "./MenuComponent";

export default function MainPage() {

    const [mainMenus, setMainMenus] = useState(null);
    const [loading, setLoading] = useState(true);

    const openWindow = (url, popName, features) => {
        window.open(url, popName, features);
    } 

    useEffect(() => {
        MenuService.getMainMenus().then((result) => {
            setMainMenus(result.data);
            setLoading(false);
        });
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <MenuComponent menus={mainMenus}/>
    );
}
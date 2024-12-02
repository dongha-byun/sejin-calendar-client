import React from "react";

export default function MenuComponent(props) {
    const { menus } = props;

    const openWindow = (url, popName, features) => {
        window.open(url, popName, features);
    }

    return (
        <ul>
            {menus.map((subMenu) => {
                return (
                    <li key={subMenu.id}>
                        {subMenu.path ? 
                            <span onClick={() => openWindow(subMenu.path, subMenu.name, "width=1200,height=1000")}>{subMenu.name}</span> :
                            <span>{subMenu.name}</span>
                        }
                        { subMenu.childMenus &&
                            <MenuComponent menus={subMenu.childMenus} />
                        }
                    </li>
                );
            })}
        </ul>
    );
}
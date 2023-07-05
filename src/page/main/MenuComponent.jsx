import React, { useEffect } from "react";

export default function MenuComponent(props) {
    const { menus } = props;

    return (
        <ul>
            {menus.map((subMenu) => {
                return (
                    <li key={subMenu.id}>
                        <span>{subMenu.name}</span>
                        { subMenu.childMenus &&
                            <MenuComponent menus={subMenu.childMenus} />
                        }
                    </li>
                );
            })}
        </ul>
    );
}
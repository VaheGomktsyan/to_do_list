import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Menu: React.FC = React.memo((): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <nav className="menu-bar">
            <div className="container">
                <div className="menu-items">
                    <ul className="menu-item">
                        <li className="navigation__list-item">
                        <i className="fa-solid fa-house-chimney"></i>
                            <NavLink to={"/"}>Tasks</NavLink>
                        </li>
                        <li className="navigation__list-item">
                            <NavLink to={"/addTask"}>Create Task</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});

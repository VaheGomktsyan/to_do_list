import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { NavLink } from "react-router-dom";

export const Menu: React.FC = React.memo((): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <nav className="nav">
            <div className="container">
                <ul className="navigation__list">
                    <li className="navigation__list-item">
                        <NavLink to={"/"}>Tasks</NavLink>
                    </li>
                    <li className="navigation__list-item">
                        <NavLink to={"/addTask"}>Create Task</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

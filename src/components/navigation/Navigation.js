import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./navigation.css";
import {NavLink } from "react-router-dom";

function Navigation() {

    return (
        <nav className="navbar">
            <Menu noOverlay>
                <ul>
                    <li className="nav-menu-list"><NavLink to="/" className="menu-item" >Home</NavLink></li>
                    <li className="nav-menu-list"><NavLink to="/login" className="menu-item" >Inloggen</NavLink></li>
                    <li className="nav-menu-list"><NavLink to="/signup" className="menu-item" >Registreren</NavLink></li>
                    <li className="nav-menu-list"><NavLink to="/search" className="menu-item" >Ras zoeken</NavLink></li>
                    <li className="nav-menu-list"><NavLink to="/alldogs" className="menu-item" >Alle rassen</NavLink></li>
                </ul>
            </Menu>
            <p>Dog finder</p>
            <button className="navbar-button">Inloggen</button>
        </nav>
    );
}

export default Navigation;
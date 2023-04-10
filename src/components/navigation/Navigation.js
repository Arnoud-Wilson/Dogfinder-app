import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {

    return (
        <nav className="navbar">
            <Menu noOverlay>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
            <p>Dog finder</p>
            <button>Inloggen</button>
        </nav>
    );
}

export default Navigation;
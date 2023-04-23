import React, {useContext} from "react";
import { slide as Menu } from "react-burger-menu";
import "./navigation.css";
import {NavLink, useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/CustomContextProvider";

function Navigation() {
    const {isAuth, logoutFunction, username} = useContext(AuthContext);
    const navigate = useNavigate();

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
            {isAuth === false ?
                <button className="navbar-button" onClick={()=> navigate("/login")}>Inloggen</button>
                :
                <>
                <p className="username">{username}</p>
                <button className="navbar-button" onClick={logoutFunction}>Uitloggen</button>
                </>
            }
        </nav>
    );
}

export default Navigation;
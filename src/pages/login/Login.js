import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/CustomContextProvider";
import "./login.css"


function Login() {
    const {isAuthenticated, setIsAuthenticated, loginFunction } = useContext(AuthContext);

    console.log(isAuthenticated);

    function changeHandler(e) {
        e.preventDefault();
        const changedFieldName = e.target.name;

        setIsAuthenticated({
            ...isAuthenticated,
            [changedFieldName]: e.target.value,
        });
    }

    return (
        <section className="login-user-outer-wrapper">
        <article className="login-user-tile">
            <h1>Inloggen</h1>
            <p>Log in om toegang te krijgen tot al onze faciliteiten</p>

            <form onSubmit={loginFunction} >
                <label htmlFor="username">Gebruikersnaam:</label>
                <br/>
                <input
                    type="text"
                    name="username"
                    onChange={changeHandler}
                    minLength={6}
                />
                <br/>
                <label htmlFor="password">Wachtwoord:</label>
                <br/>
                <input
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    minLength={6}
                />
                <br/>
                <button className="standard-button" type="submit">Inloggen</button>
            </form>
            <p className="error-message">{isAuthenticated.error}</p>
            <p>Heb je nog geen account? <Link to="/signup" className="signup-link">Registreer</Link> je dan eerst.</p>
        </article>
        </section>
    );
}

export default Login;
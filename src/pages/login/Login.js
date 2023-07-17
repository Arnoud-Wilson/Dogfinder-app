import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/CustomContextProvider";
import "./login.css"
import Button from "../../components/Button";
import Input from "../../components/Input";


function Login() {
    const {isAuthenticated, setIsAuthenticated, loginFunction } = useContext(AuthContext);

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
                <Input
                    type="text"
                    name="username"
                    onChange={changeHandler}
                    minLength="6"
                />
                <br/>
                <label htmlFor="password">Wachtwoord:</label>
                <br/>
                <Input
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    minLength="6"
                />
                <br/>
                <Button
                    className="standard-button"
                    type="submit"
                    name="Inloggen"
                />
            </form>
            <p className="error-message">{isAuthenticated.error}</p>
            <p>Heb je nog geen account? <Link to="/signup" className="signup-link">Registreer</Link> je dan eerst.</p>
        </article>
        </section>
    );
}

export default Login;
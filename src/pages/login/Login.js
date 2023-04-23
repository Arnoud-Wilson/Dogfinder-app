import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/CustomContextProvider";
import "./login.css"

function Login() {
    const { isAuthenticated, setIsAuthenticated, loginFunction } = useContext(AuthContext);


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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={loginFunction} >
                <label htmlFor="username">Gebruikersnaam:</label>
                <br/>
                <input
                    type="text"
                    name="username"
                    onChange={changeHandler}
                />
                <br/>
                <label htmlFor="password">Wachtwoord:</label>
                <br/>
                <input
                    type="password"
                    name="password"
                    onChange={changeHandler}
                />
                <br/>
                <button className="home-button">Inloggen</button>
            </form>
            <p className="error-message">Hier komt eventueel een foutmelding</p>
            <p>Heb je nog geen account? <Link to="/signup" className="signin-link">Registreer</Link> je dan eerst.</p>
        </article>
        </section>
    );
}

export default Login;
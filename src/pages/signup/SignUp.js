import React, { useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css"
import axios from "axios";


function SignUp() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        username: "",
        role: "user",
        error: "",
    })

    function changeHandler(e) {
        e.preventDefault();
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }

    async function register() {

        try {
            await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
                email: `${formState.email}`,
                password: `${formState.password}`,
                username: `${formState.username}`,
                role: `${formState.role}`,
            });
            navigate("/login")
        }
        catch (e) {
            setFormState({ error: e.response.data.message })
            console.error(e)
        }
    }

    function inputData(e) {
        e.preventDefault();
        register();
    }

    return (
        <section className="register-user-outer-wrapper">
            <article className="register-user-tile">
                <h1>Registreren</h1>
                <p>Vul je gegeven in om gebruik te maken van onze Dog finder functie.</p>

                <form onSubmit={inputData} >
                    <label htmlFor="email">Email adres:</label>
                    <br/>
                    <input
                        type="email"
                        name="email"
                        onChange={changeHandler}
                    />
                    <br/>
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
                    <button className="home-button">Registreer</button>
                </form>
                <p className="error-message">{formState.error}</p>
                <p>Klik <Link to="/signup" className="signin-link">hier</Link> als je je wachtwoord vergeten bent.</p>
            </article>
        </section>
    );
}

export default SignUp;
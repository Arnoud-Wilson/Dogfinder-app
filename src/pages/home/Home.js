import React, {useContext} from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../context/CustomContextProvider";
import axios from "axios";


function Home() {
    const { loginFunction } = useContext(AuthContext);
    const navigate = useNavigate();

    async function testFunction() {
        try {
            const result = await axios.get("https://frontend-educational-backend.herokuapp.com/api/test/all")
            console.log(result)

        }catch (e) {
            console.error(e)
        }
    }




    return (
            <section className="home-section">
                <h2>The Dog finder app</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias beatae ipsa itaque numquam quibusdam quod, rem! A accusantium aliquam, aperiam architecto at autem commodi consequuntur culpa cumque deserunt dolores doloribus error excepturi fugit illum incidunt ipsa laboriosam maiores minus molestias nam necessitatibus nemo, nesciunt porro quae quia quibusdam quis sapiente velit vitae. Consequatur consequuntur distinctio doloremque ducimus explicabo inventore iste maxime natus omnis, optio perferendis perspiciatis repudiandae suscipit! Accusamus aliquam ex nemo similique voluptatibus.</p>
                <button
                    className="home-button"
                    onClick={()=> navigate("/signup")}
                >Registreer</button>
                <button
                    className="home-button"
                    onClick={()=> navigate("/login")}
                >Inloggen</button>
                <button
                    className="home-button"
                    onClick={testFunction}
                >Backend test</button>
            </section>
    );
}

export default Home;
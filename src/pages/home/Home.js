import React from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Home() {
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
                <p>Wat leuk dat je onze Dog finder app hebt gevonden!
                    <br/><br/>
                    Waarschijnlijk ben je op zoek naar een hondenras wat goed bij jou e/o jouw gezin past en hoop je dat deze dogfinder app je verder op weg helpt.
                    <br/><br/>
                    Wist je dat onze database gevuld is met bijna 200 verschillende hondenrassen? Grote kans dus dat er wel een match voor jou tussen zit.
                    <br/><br/>
                    Als je je registreert via de "registreer" button onderin, krijg je toegang tot alle faciliteiten die de dogfinder app biedt.
                </p>
                <button
                    className="standard-button"
                    onClick={()=> navigate("/signup")}
                >Registreer</button>
                <button
                    className="standard-button"
                    onClick={()=> navigate("/login")}
                >Inloggen</button>
                <button
                    className="standard-button"
                    onClick={testFunction}
                >Backend test</button>
            </section>
    );
}

export default Home;
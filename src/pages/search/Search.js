import React, {useState, useContext} from "react";
import "./search.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/CustomContextProvider";
import Button from "../../components/Button";


function Search() {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [kids, setKids] = useState(5);
    const [dogs, setDogs] = useState(5);
    const [train, setTrain] = useState(5);
    const [energy, setEnergy] = useState(5);
    const [protect, setProtect] =useState(5);

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/dogfinderpage/${kids}/${dogs}/${train}/${energy}/${protect}`)
    }

    return (
        <section className="search-outer-wrapper">
            <article className="dogfinder-text">
                <h2>The dog finder</h2>
                <p>Je bent er bijna!
                    <br/>
                    Wil je onze speurhond aan het werk zetten? Vergeet dan niet dat je eerst moet registreren of in moet loggen, daarna krijg je het scherm met sliders te zien waarbij je jouw voorkeuren en wensen kan aangeven zodat wij op zoek kunnen gaan naar de perfecte match! Laat je het ons weten als jij de perfecte match gevonden hebt? Succes.
                </p>
                <Button
                    className="standard-button"
                    onClick={()=> navigate("/signup")}
                    type="button"
                    name="Registreer"
                />
                <Button
                    className="standard-button"
                    onClick={()=> navigate("/login")}
                    type="button"
                    name="Inloggen"
                />
            </article>
            {isAuth === true &&
                <article className="dogfinder-form">
                    <h3>Vul hier jouw voorkeuren in:</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="kids">Goed met kinderen?</label>
                        <input
                            type="range"
                            id="kids"
                            name="kids"
                            min="1" max="5"
                            onChange={(e) => setKids(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="dogs">Goed met honden?</label>
                        <input
                            type="range"
                            id="dogs"
                            name="dogs"
                            min="1" max="5"
                            onChange={(e) => setDogs(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="train">Trainbaarheid?</label>
                        <input
                            type="range"
                            id="train"
                            name="train"
                            min="1" max="5"
                            onChange={(e) => setTrain(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="energy">Hoeveelheid energie?</label>
                        <input
                            type="range"
                            id="energy"
                            name="energy"
                            min="1" max="5"
                            onChange={(e) => setEnergy(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="protect">Waakzaamheid?</label>
                        <input
                            type="range"
                            id="protect"
                            name="protect"
                            min="1" max="5"
                            onChange={(e) => setProtect(e.target.value)}
                        />
                        <br/>
                        <Button
                            className="standard-button"
                            type="submit"
                            name="Zoek mijn hond!"
                        />
                    </form>
                </article>
            }
        </section>
    );
}

export default Search;
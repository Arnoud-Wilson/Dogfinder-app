import React, {useState, useContext} from "react";
import "./search.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/CustomContextProvider";


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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam architecto culpa deleniti,
                    dignissimos dolor eius esse est exercitationem fugit impedit incidunt ipsum laborum minima nihil obcaecati,
                    odio optio recusandae repellendus reprehenderit rerum sed suscipit tempora totam ut voluptate?
                </p>
                <button
                    className="home-button"
                    onClick={()=> navigate("/signup")}
                >Registreer</button>
                <button
                    className="home-button"
                    onClick={()=> navigate("/login")}
                >Inloggen</button>
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
                        <button className="home-button">Zoek mijn hond!</button>
                    </form>
                </article>
            }
        </section>
    );
}

export default Search;
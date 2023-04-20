import React, {useState} from "react";
import "./search.css";
import axios from "axios";

function Search() {
    const [result, setResult] = useState();
    const [kids, setKids] = useState();
    const [dogs, setDogs] = useState();
    const [train, setTrain] = useState();
    const [energy, setEnergy] = useState();
    const [protect, setProtect] =useState();

    function dogFinder(e) {
        e.preventDefault();

        async function getData() {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/dogs?trainability=${train}`, { headers: {
                        "X-API-KEY": "LKEoOat+ZzKlufYLyU0OeA==GEab0iT2DhVtWhYz",
                    }})

                console.log(response.data)

                setResult(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        void getData();

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
                >Registreer</button>
                <button
                    className="home-button"
                >Inloggen</button>
            </article>
            <article className='dogfinder-form'>
                <h3>Vul hier jouw voorkeuren in:</h3>
                <form onSubmit={dogFinder}>
                    <label htmlFor="kids">Goed met kinderen?</label>
                    <input
                        type="range"
                        id="kids"
                        name="kids"
                        min="0" max="5"
                        onChange={(e)=> setKids(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="dogs">Goed met honden?</label>
                    <input
                        type="range"
                        id="dogs"
                        name="dogs"
                        min="0" max="5"
                        onChange={(e)=> setDogs(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="train">Trainbaarheid?</label>
                    <input
                        type="range"
                        id="train"
                        name="train"
                        min="0" max="5"
                        onChange={(e)=> setTrain(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="energy">Hoeveelheid energie?</label>
                    <input
                        type="range"
                        id="energy"
                        name="energy"
                        min="0" max="5"
                        onChange={(e)=> setEnergy(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="protect">Waakzaamheid?</label>
                    <input
                        type="range"
                        id="protect"
                        name="protect"
                        min="0" max="5"
                        onChange={(e)=> setProtect(e.target.value)}
                    />
                    <br/>
                    <button className="home-button">Zoek mijn hond!</button>
                </form>
            </article>
        </section>
    );
}

export default Search;
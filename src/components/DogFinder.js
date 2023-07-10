import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import poundToKilogram from "../helpers/poundToKilogram";
import inchToCentimeter from "../helpers/inchToCentimeter";


function DogFinder({preferences}) {
    const [dogsFetched, setDogsFetched] = useState([]);
    const [dataFetched, toggleDataFetched] = useState(false);
    const [preferenceId] = useState({
            kids: preferences.kids -2,
            dogs: preferences.dogs -2,
            train: preferences.train,
            energy: preferences.energy,
            protect: preferences.protect,
            trainSearch: preferences.train <= 2 ? preferences.train ++ : preferences.train,
            energySearch: preferences.energy <= 2 ? preferences.energy ++ :preferences.energy,
            protectSearch: preferences.protect <= 2 ? preferences.protect ++ : preferences.protect,
        });
    const dogsFetchedUnique = [];
    const dogfinderResult = [];

    useEffect(() => {
        const controller = new AbortController();

    async function getData() {

        try {
            const responseProtect = await axios.get(`https://api.api-ninjas.com/v1/dogs?protectiveness=${preferenceId.protectSearch}`, { headers: {
                    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
                }, signal: controller.signal})
            const responseEnergy = await axios.get(`https://api.api-ninjas.com/v1/dogs?energy=${preferenceId.energySearch}`, { headers: {
                    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
                }, signal: controller.signal})
            const responseTrain = await axios.get(`https://api.api-ninjas.com/v1/dogs?trainability=${preferenceId.trainSearch}`, { headers: {
                    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
                }, signal: controller.signal})

            setDogsFetched([].concat(responseProtect.data, responseEnergy.data, responseTrain.data));
            toggleDataFetched(true)

            }
        catch (error) {
            console.error(error);
        }
    }void getData();

        return function cleanup() {
            controller.abort();
        }

    }, []);

    dogsFetched.map(x => dogsFetchedUnique.filter(a => a.name === x.name).length > 0 ? null : dogsFetchedUnique.push(x));

    function filterDogs() {

        dogsFetchedUnique.map((dog) => {
            if (dog.good_with_children >= preferenceId.kids &&
                dog.good_with_other_dogs >= preferenceId.dogs &&
                dog.energy == preferenceId.energy &&
                dog.trainability >= preferenceId.train &&
                dog.protectiveness == preferenceId.protect){

                dogfinderResult.push(dog)
            }
        })
        return dogfinderResult;
    }

    filterDogs(dogfinderResult);

    if (dogfinderResult.length >= 1 && dataFetched === true) {
        return (
            dogfinderResult.map((dog) => {
                    return (
                        <article key={dog.name} className="dogfinder-tile">
                            <h1>{dog.name}</h1>
                            <div className="dogfinder-inner-wrapper">
                                <div className="dogfinder-info">
                                    <p>Max hoogte teef: {inchToCentimeter(dog.max_height_female)} cm</p>
                                    <p>Min hoogte teef: {inchToCentimeter(dog.min_height_female)} cm</p>
                                    <p>Max hoogte reu: {inchToCentimeter(dog.max_height_male)} cm</p>
                                    <p>Min hoogte reu: {inchToCentimeter(dog.min_height_male)} cm</p>
                                    <p>Max gewicht teef: {poundToKilogram(dog.max_weight_female)} kg</p>
                                    <p>Min gewicht teef: {poundToKilogram(dog.min_weight_female)} kg</p>
                                    <p>Max gewicht reu: {poundToKilogram(dog.max_weight_male)} kg</p>
                                    <p>Min gewicht reu: {poundToKilogram(dog.min_weight_male)} kg</p>
                                    <p>Max levensverwachting: {dog.max_life_expectancy} jaar</p>
                                    <p>Min levensverwachting: {dog.min_life_expectancy} jaar</p>
                                </div>
                                <div className="dogfinder-info">
                                    <p>Trainbaarheid: {dog.trainability}</p>
                                    <p>Hoeveelheid energie: {dog.energy}</p>
                                    <p>Hoeveelheid blaffen: {dog.barking}</p>
                                    <p>Waakzaamheid: {dog.protectiveness}</p>
                                    <p>Vacht lengte: {dog.coat_length}</p>
                                    <p>Verharing: {dog.shedding}</p>
                                    <p>Speelsheid: {dog.playfulness}</p>
                                    <p>Kwijlen: {dog.drooling}</p>
                                    <p>Goed met kinderen: {dog.good_with_children}</p>
                                    <p>Goed met andere honden: {dog.good_with_other_dogs}</p>
                                    <p>Goed met vreemden: {dog.good_with_strangers}</p>
                                    <p>Vacht verzorging: {dog.grooming}</p>
                                </div>
                                <img src={dog.image_link} alt={dog.name}/>
                            </div>
                        </article>
                    )
                }
            )
        )
    }
    else if (dogfinderResult.length === 0 && dataFetched === true) {
        return (
            <article className="else-if-tile">
                <h2>We hebben helaas geen geschikt ras kunnen vinden...</h2>
                <h3>Klik <Link to="/search" className="signup-link">hier</Link> om je eisen wat bij te stellen</h3>
            </article>
        )
    }
    else {
        return (
            <article className="else-if-tile">
                <h1>We hebben onze speurhond op pad gestuurd, een moment geduld alsjeblieft.</h1>
            </article>
        )
    }
}


export default DogFinder;




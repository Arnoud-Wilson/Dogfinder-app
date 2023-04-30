import React from "react";
import {useParams} from "react-router-dom";
import DogFinder from "../../components/DogFinder";
import "./dogfinderpage.css"


function DogFinderPage() {
    const preferences = useParams();

    return (
        <section className="dogfinder-outer-wrapper">
            <h1>Dit zijn de hondenrassen die het beste bij je passen.</h1>
            <h2>Aangegeven in cijfers van nul tot vijf</h2>
            <DogFinder
                preferences = {preferences}
            />
        </section>
    );
}

export default DogFinderPage;
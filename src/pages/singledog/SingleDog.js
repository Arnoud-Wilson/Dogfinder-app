import React from "react";
import {useParams} from "react-router-dom";
import GetData from "../../components/GetData";
import "./singleDog.css"


function SingleDog() {
    const id = useParams();

    return (
        <section className="single-dog-outer-wrapper">
            <GetData
            searchId={id.id}
            urlId={id.id}
            />
        </section>
    );
}

export default SingleDog;
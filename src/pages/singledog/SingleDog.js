import React from "react";
import {useParams} from "react-router-dom";
import GetAllData from "../../components/GetData";
import "./singleDog.css"


function SingleDog() {
    const id = useParams();


    return (
        <section className="single-dog-outer-wrapper">
            <GetAllData
            searchId={id.id}
            urlId={id.id}
            />
        </section>
    );
}

export default SingleDog;
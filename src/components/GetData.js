import React, {useEffect, useState,} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import GetDogImage from "./GetDogImage";


function GetAllData({searchId, urlId}) {
    const [result, setResult] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        async function getData() {
            try {
                const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${searchId}`);

                setResult(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        void getData();

    }, [searchId]);

    if  (result !== undefined && urlId === undefined) {
        return (
                <article key={result.id} className="dog-tile" onClick={() => navigate(`/singledog/${result.id}`)}>
                    <h2>{result.name}</h2>
                    <GetDogImage
                        imageId={result.reference_image_id}
                    />
                </article>
        )}

    else if (result !== undefined) {
        return (
            <article key={result.id} className="single-dog-tile">
                <h1>{result.name}</h1>
                <div className="single-dog-inner-wrapper">
                    <div className="single-dog-breed-info">
                        <h3>Breed group: {result.breed_group}</h3>
                        <h3>Bred for: {result.bred_for}</h3>
                        <h3>Temperament: {result.temperament}</h3>
                        <h3>Life span: {result.life_span}</h3>
                        <h3>height: {result.height.metric} cm</h3>
                        <h3>weight: {result.weight.metric} kg</h3>
                    </div>
                    <GetDogImage
                        imageId={result.reference_image_id}
                    />
                </div>
            </article>
        )
    }
}

export default GetAllData;
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function DogFinder() {
    const resultProtect = []
    const resultEnergy = []
    const resultTrain = []
    const preferences = useParams();
    const kids = preferences.kids;
    const dogs = preferences.dogs;
    const train = preferences.train;
    const energy = preferences.energy;
    const protect = preferences.protect;


    async function getData() {
        try {
            const responseProtect = await axios.get(`https://api.api-ninjas.com/v1/dogs?trainability=${protect}`, { headers: {
                    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
                }})
            const responseEnergy = await axios.get(`https://api.api-ninjas.com/v1/dogs?trainability=${energy}`, { headers: {
                    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
                }})
            const responseTrain = await axios.get(`https://api.api-ninjas.com/v1/dogs?trainability=${train}`, { headers: {
                    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
                }})

            resultProtect.push(responseProtect.data);
            resultEnergy.push(responseEnergy.data);
            resultTrain.push(responseTrain.data);


        }
        catch (error) {
            console.error(error);
        }
    }void getData();


    console.log(resultProtect)



    return (
        <>
        </>
   );
}



export default DogFinder;
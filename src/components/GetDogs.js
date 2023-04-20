import React, {useState, useEffect} from "react";
import axios from "axios";
import GetAllData from "./GetData";

function GetDogs({page}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function getTwentyDogs() {
            try {
                const response = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=12&page=${page}`)

                setResult(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        void getTwentyDogs();
    }, [page]);

    return (
        result.length > 0 &&
        result.map((dog) => {
            return <GetAllData
                searchId = {dog.id}
            />
        }));
}

export default GetDogs;
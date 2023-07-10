import React, {useEffect, useState} from "react";
import axios from "axios";


function GetDogImage({imageId}) {
    const [result, setResult] = useState();

    useEffect(() => {
        async function getImage() {
            try {
                const response = await axios.get(`https://api.thedogapi.com/v1/images/${imageId}`);

                setResult(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        void getImage();
    }, [imageId]);

    return (
        result !== undefined &&
        <img src={result.url} alt={result.breeds[0].name} />
    );
}

export default GetDogImage;
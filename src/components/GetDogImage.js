import React, {useEffect, useState} from "react";
import axios from "axios";


function GetDogImage({imageId}) {
    const [result, setResult] = useState();

    useEffect(() => {
        const controller = new AbortController();

        async function getImage() {
            try {
                const response = await axios.get(`https://api.thedogapi.com/v1/images/${imageId}`, {
                    signal: controller.signal
                });

                setResult(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        void getImage();

        return function cleanup() {
            controller.abort();
        }

    }, [imageId]);

    return (
        result !== undefined &&
        <img src={result.url} alt={result.breeds[0].name} />
    );
}

export default GetDogImage;
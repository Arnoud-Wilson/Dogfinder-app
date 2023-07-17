import React, {useState} from "react";
import "./alldogs.css";
import GetDogs from "../../components/GetDogs";
import Button from "../../components/Button";


function AllDogs() {

    const [page, setPage] = useState(0);

    return (
        <>
            <section className="outer-wrapper">
            <div className="button-wrapper" >
                <Button
                        className="all-dog-button"
                        onClick={() => setPage(page - 1)}
                        disabled = {page <= 0}
                        type="button"
                        name="Vorige"
                />
                <Button
                        className="all-dog-button"
                        onClick= {() => setPage(page + 1)}
                        disabled = {page >= 8}
                        type="button"
                        name="Volgende"
                />
            </div>
            <div className="inner-wrapper">
                <GetDogs
                    page = {page}
                />
            </div>
                <div className="button-wrapper" >
                    <Button
                        className="all-dog-button"
                        onClick={() => setPage(page - 1)}
                        disabled = {page <= 0}
                        type="button"
                        name="Vorige"
                    />
                    <Button
                        className="all-dog-button"
                        onClick= {() => setPage(page + 1)}
                        disabled = {page >= 8}
                        type="button"
                        name="Volgende"
                    />
                </div>
            </section>
        </>
    );
}

export default AllDogs;
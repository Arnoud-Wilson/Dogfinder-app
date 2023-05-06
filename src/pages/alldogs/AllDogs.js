import React, {useState} from "react";
import "./alldogs.css";
import GetDogs from "../../components/GetDogs";


function AllDogs() {

    const [page, setPage] = useState(0);

    return (
        <>
            <section className="outer-wrapper">
            <div className="button-wrapper" >
                <button
                        className="all-dog-button"
                        onClick={() => setPage(page - 1)}
                        disabled = {page <= 0}
                        >Vorige
                        </button>
                <button
                        className="all-dog-button"
                        onClick= {() => setPage(page + 1)}
                        disabled = {page >= 8}
                        >Volgende
                        </button>
            </div>
            <div className="inner-wrapper">
                <GetDogs
                    page = {page}
                />
            </div>
                <div className="button-wrapper" >
                    <button
                        className="all-dog-button"
                        onClick={() => setPage(page - 1)}
                        disabled = {page <= 0}
                    >Vorige
                    </button>
                    <button
                        className="all-dog-button"
                        onClick= {() => setPage(page + 1)}
                        disabled = {page >= 8}
                    >Volgende
                    </button>
                </div>
            </section>
        </>
    );
}

export default AllDogs;
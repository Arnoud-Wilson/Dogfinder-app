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
                        type="button"
                        >Vorige
                        </button>
                <button
                        className="all-dog-button"
                        onClick= {() => setPage(page + 1)}
                        disabled = {page >= 8}
                        type="button"
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
                        type="button"
                    >Vorige
                    </button>
                    <button
                        className="all-dog-button"
                        onClick= {() => setPage(page + 1)}
                        disabled = {page >= 8}
                        type="button"
                    >Volgende
                    </button>
                </div>
            </section>
        </>
    );
}

export default AllDogs;
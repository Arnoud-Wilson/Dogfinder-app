import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import checkIfTokenIsValid from "../helpers/checkIfTokenIsValid";


export const AuthContext = createContext({ });


function CustomContextProvider({children}) {
    const navigate = useNavigate();
    const localToken = localStorage.getItem("token");

    const [isAuthenticated, setIsAuthenticated] = useState({
        isAuth: false,
        token: null,
        username: null,
        password: null,
        email: null,
        id: null,
        status: "pending",
    });

    useEffect(() => {
        async function setUser() {

            try {
                const userResult = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", { headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localToken}`,
                    }})
                setIsAuthenticated({
                    isAuth: true,
                    username: `${userResult.data.username}`,
                    email: `${userResult.data.email}`,
                    id: `${userResult.data.id}`,
                    status: "done",
                });
                navigate("/");
            }catch (e){
                setIsAuthenticated({status: "done"});
                console.error(e);
            }
        }
        if (localToken !== null && checkIfTokenIsValid(localToken)) {
            void setUser()
        }
        else {
            setIsAuthenticated({
                status: "done",
                isAuth: false,
            })}
    }, []);



    async function login(e) {
        e.preventDefault();

        try {
            const loginData = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                username: `${isAuthenticated.username}`,
                password: `${isAuthenticated.password}`,
            })
            localStorage.setItem("token", `${loginData.data.accessToken}`)
            setIsAuthenticated({
                isAuth: true,
                token: `${loginData.data.accessToken}`,
                username: `${loginData.data.username}`,
                status: "done",
            })
            navigate("/search");
        }catch (e) {
            setIsAuthenticated({status: "done"});
            console.error(e);
        }
    }


    function logOut(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        setIsAuthenticated({
            isAuth: false,
            username: null,
            email: null,
            token: null,
            status: "done",
        });
        navigate("/");
    }


    const auth = {
        // ...isAuthenticated
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        isAuth: isAuthenticated.isAuth,
        username: isAuthenticated.username,
        password: isAuthenticated.password,
        email: isAuthenticated.email,
        token: isAuthenticated.token,
        id: isAuthenticated.id,
        loginFunction: login,
        logoutFunction: logOut,
    }


    return (
        <AuthContext.Provider value={auth}>
            {isAuthenticated.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default CustomContextProvider;


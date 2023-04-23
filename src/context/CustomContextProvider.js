import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";


export const AuthContext = createContext({ });


function CustomContextProvider({children}) {
    const navigate = useNavigate();
    const localToken = localStorage.getItem("token");

    const [isAuthenticated, setIsAuthenticated] = useState({
        isAuth: false,
        token: null,
        username: null,
        email: null,
        id: null,
    });

    useEffect(() => {
        async function setUser() {
            const decoded = jwt_decode(localToken)

            try {
                const userResult = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user${decoded.sub}`, { headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localToken}`,
                    }})
                console.log(userResult.data)
                setIsAuthenticated({
                    isAuth: true,
                    username: `${userResult.data.username}`,
                    email: `${userResult.data.email}`,
                    id: `${userResult.data.id}`,
                });
                navigate("/profile");
            }catch (e){
                console.error(e)
            }
        }
        localToken !== null && setUser()
    }, []);



    async function login(e) {
        e.preventDefault();

        try {
            const loginData = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                username: `${isAuthenticated.username}`,
                password: `${isAuthenticated.password}`,
            })
            console.log(loginData)
            console.log("Gebruiker is ingelogd!");
            localStorage.setItem("token", `${loginData.data.accessToken}`)
            setIsAuthenticated({
                isAuth: true,
                token: `${loginData.data.accessToken}`,
            })
            navigate("/search");
        }catch (e) {
            console.error(e)
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
        });
        navigate("/");
    }


    const auth = {
        // ...isAuthenticated
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        isAuth: isAuthenticated.isAuth,
        username: isAuthenticated.username,
        email: isAuthenticated.email,
        token: isAuthenticated.token,
        id: isAuthenticated.id,
        loginFunction: login,
        logoutFunction: logOut,
    }


    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export default CustomContextProvider;


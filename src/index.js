import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomContextProvider from "./context/CustomContextProvider"
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <CustomContextProvider>
                <App />
            </CustomContextProvider>
        </Router>
    </React.StrictMode>
);



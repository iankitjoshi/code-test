import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from "./App";
import './App.css';


function AppRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;

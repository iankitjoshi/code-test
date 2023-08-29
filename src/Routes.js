import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Jobs from "./Container/Job";


function AppRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Jobs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;

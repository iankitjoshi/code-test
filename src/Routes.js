import React, { Component } from "react";
import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';
import App from "./App";
import './App.css';


function AppRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;

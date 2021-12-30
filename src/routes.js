import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import HomePage from './pages/HomePage'
import FormSignUp from './pages/FormSignup'
import FormUpdate from './pages/FormUpdate'

export default function Pages() {

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/register" element={<FormSignUp/>} />
                <Route exact path="/edit/:id" element={<FormUpdate/>} />
            </Routes>
        </Router>
        )
}
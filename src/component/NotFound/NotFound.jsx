import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="found">
           <h1 className="notFound">4<span className="notFoundSpan">0</span>4</h1>
           <p className="notFoundPage">This page is not available</p>
           <button className="btn btn-primary mb-4">
           <NavLink to="/home" className="selected backBtn">Back to Home </NavLink>
           </button>
        </div>
    );
};

export default NotFound;
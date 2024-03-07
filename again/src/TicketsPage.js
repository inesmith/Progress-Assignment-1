import { Link } from "react-router-dom";
import React from 'react';

function Navbar3() {
    return (
        <nav>
            <ul>
                <li><link to="/HomePage">Home</link></li>
                <li><link to="/AboutPage">About</link></li>
                <li><link to="/">Tickets</link></li>
            </ul>
        </nav>
    );
}

export default Navbar3;
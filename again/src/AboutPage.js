import { Link } from "react-router-dom";
import React from 'react';
import './App.css';
import './AboutPage.css'



function Navbar2() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/App">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/TicketsPage">Tickets</Link></li>
                </ul>
            </nav>

     
        </div>
    );
}

export default Navbar2;


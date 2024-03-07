import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './App';
import AboutPage from './AboutPage';
import TicketsPage from './TicketsPage';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './AboutPage.css'
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";



function App() {
  return (
    <Router>
      <div>
        <nav className='Nav'>
          <ul>
            <li>
            <Image className='Logo' src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" rounded />
            </li>
            <li className='Home'>
              <Link to="/App">Home</Link>
            </li>
            <li className='About'> 
              <Link to="/AboutPage">About</Link>
            </li>
            <li className='Tickets'>
              <Link to="/TicketsPage">Tickets</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/App" component={HomePage} />
          <Route path="/AboutPage" component={AboutPage} />
          <Route path="/TicketsPage" component={TicketsPage} />
        </Routes>
      </div>

    <div className='App'>
        <h1>These are Manchester's Scores & Ratings.</h1>
        <div className='Bar'>
            <p>This is the total of games Manchester United won over the past 5 months.</p>
            <BarChart/>
        </div>

        <div className='Pie'>
            <PieChart/>
        </div>

        <div className='Line'>
            <LineChart/>
        </div>

        <div className='Doughnut'>
            <DoughnutChart/>
        </div>

    </div>
    </Router>

    
   
  );
}

export default App;




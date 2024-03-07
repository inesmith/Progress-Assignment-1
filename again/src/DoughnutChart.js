import React from "react";
import { Doughnut } from "react-chartjs-2";

const games = {
    labels: [
      'Antony',
      'Jonny Evans',
      'Casemiro'
    ],
    datasets: [{
      label: 'Games Players have Played',
      data: [72, 16, 73],
      backgroundColor: [
        '#8B0000',
        '#A9A9A9',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: games,
};

export const DoughnutChart = () => {
    return <div>
        <Doughnut data={games} />
    </div>;
};

export default config;
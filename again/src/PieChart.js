import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
    labels: [
        'Won',
        'Lost',
        'Draw'

    ],
    datasets: [{
        label: 'Average won vs Lost',
        data: [15, 5, 1,],
        backgroundColor: [
             '#8B0000',
            '#A9A9A9',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
};

export const PieChart = () => {
    return <div>
        <Pie data={data} />
    </div>;
};

export default config;
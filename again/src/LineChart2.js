import React from "react";
import { Line } from "react-chartjs-2";

const data = {
    labels: ['Jonny Evans', 'Mason Mount', 'Antony'],
    datasets: [{
        label: 'Team members played',
        data: [16, 12, 72],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
};

export const LineChart2 = () => {
    return <div>
        <Line data={data} />
    </div>;
};

export default config;
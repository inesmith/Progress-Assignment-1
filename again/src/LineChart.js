import React from "react";
import { Line } from "react-chartjs-2";

const data = {
    labels: ['October 2023', 'November 2023', 'December 2023', 'January 2023', 'February 2024', 'March 2024'],
    datasets: [{
        label: 'How the team improved (Games won)',
        data: [5, 7, 3, 9, 10, 2, 5],
        fill: false,
        borderColor: '#8B0000',
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
};

export const LineChart = () => {
    return <div>
        <Line data={data} />
    </div>;
};

export default config;
import React from "react";
import { Bar } from "react-chartjs-2";

const ChartExample = {
    labels: ["November 2023", "December 2023", "January 2024", "February 2024", "March 2024" ],
    datasets: [{
        label: 'Wins over the last 5 months',
        data: [4, 2, 3, 6, 0,],
        barPercentage: 0.5,
        barThickness: 30,
        maxBarThickness: 50,
        minBarLength: 2,
        backgroundColor: [
            '#8B0000',
            '#8B0000',
            '#8B0000',
            '#8B0000',
            '#8B0000',
            '#8B0000',

        ],
        borderColor: [
            '#8B0000',
            '#8B0000',
            '#8B0000',
            '#8B0000',
            '#8B0000',
            '#8B0000',
        ],
        borderWidth: 2
    }]
};

const config = {
    type: 'bar',
    data: ChartExample,
    options: {
        scales: {
            x: {
                type: 'label', // Set x-axis scale as category
                labels: ChartExample.labels
            },
            y: {
                beginAtZero: true
            }
        }
    },
};

export const BarChart = () => {
    return <div>
        <Bar data={ChartExample} />
    </div>;
};

export default config;
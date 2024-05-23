import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Registramos los componentes necesarios para Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function RadarChart ({ data }: {data:any}) {
    const chartData = {
        labels: ['Health', 'Strength', 'Speed', 'Endurance'],
        datasets: [
            {
                label: "User's skills",
                data: [data.health, data.strong, data.speed, data.resistence],
                backgroundColor: 'rgb(0, 162, 255,0.1)',
                borderColor: 'rgb(0, 162, 255)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: 'rgba(34, 202, 236, 0.5)',
                },
                grid: {
                    color: 'rgba(34, 202, 236, 0.5)', // Cambia el color de las líneas de la cuadrícula
                },
                pointLabels: {
                    color: 'white', // Cambia el color de las etiquetas de los puntos
                },
                ticks: {
                    display: false, // Oculta los números de los ejes radiales
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
        },
    };

  return <Radar data={chartData} options={options} />;
};

export default RadarChart;

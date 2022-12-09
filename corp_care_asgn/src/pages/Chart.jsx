import React from 'react'
import {Chart as ChartJS, LineElement, Title, Tooltip, Legend, CategoryScale, Filler, LinearScale, PointElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement,  Title, Tooltip, Legend, Filler
)

export const Chart = () => {
    const data = {
        labels: [ 'Nov1','Nov4', 'Nov8', 'Nov12', 'Nov16'],
        datasets: [
            {
                data: [30, 15, 25, 10, 40],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const {ctx, chartArea, scales} = chart;
                    if(!chartArea) return null;
                    return bgGradient(ctx, chartArea, scales);
                },
                borderColor: '#2624FF',
                pointBorderColor: 'transparent',
                tension: 0.4,
                fill: true
            }
        ],
    }
    const bgGradient = (ctx, chartArea, scales) => {
        const {left, right, top, bottom, width, height} = chartArea;
        const {x, y} = scales;
        const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBackground.addColorStop(0, '#2624FF');
        gradientBackground.addColorStop(1, 'rgba(255, 255, 255, 0)');
        return gradientBackground;
    }
    const options = {
        plugins: {
            legend: false
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks : {
                    callback: (val) => '$' + val 
                },
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
  return (
    <div>
        <div>
            <Line 
            data={data}
            options={options}
            ></Line>
        </div>
    </div>
  )
}

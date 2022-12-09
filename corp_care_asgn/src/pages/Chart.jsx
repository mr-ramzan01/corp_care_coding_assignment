import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'
ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

export const Chart = () => {
    const data = {
        labels: [ 'S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                data: [20, 20, 20, 20, 20, 20, 20],
                backgroundColor: 'aqua',
                width: '20px',
                borderWidth: 1
            },
            {
                data: [30, 30, 30, 30, 30, 30, 30],
                backgroundColor: 'blue',
                width: '20px',
                borderWidth: 1,
                borderRadius: '10px'
            }
        ]
    }
    const options = {

    }
  return (
    <div style={{width: '300px'}}>Chart
        <div>
            <Bar 
            data={data}
            options={options}
            ></Bar>
        </div>
    </div>
  )
}

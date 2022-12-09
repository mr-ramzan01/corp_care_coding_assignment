import React from 'react'
import '../../styles/Earnings.css'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'
ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

export const Earnings = () => {
  const data = {
    labels: [ 'S','M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
        {
            data: [20, 20, 20, 20, 20, 20, 20],
            backgroundColor: '#00D1FF',
            borderRadius: 10,
            barThickness: 7,
            borderWidth: 2,
            borderColor: '#fff'
        },
        {
            data: [30, 30, 30, 30, 30, 30, 30],
            backgroundColor: '#0038FF',
            borderRadius: 10,
            barThickness: 7,
            borderWidth: 2,
            borderColor: '#fff'
        }
    ]
}
const options = {
  aspectRatio: 1.3,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        display: false
      }
    },
    x: {
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        display: false
      }
    }
  }
}
  return (<>
    <div className='earnings'></div>
    <div className='earnings_div'>
      <div className='earnings_heading'>
        <div>
            <p>Saved this month</p>
            <p>$12,281</p>
            <p>Your payment will be updated by the system.</p>
        </div>
      </div>
      <div className='earnings_chart'>
          <Bar
            data={data}
            options={options}
          ></Bar>
      </div>
    </div>
    <p>Earnings</p>
    </>
  )
}

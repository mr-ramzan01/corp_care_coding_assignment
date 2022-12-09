import React from 'react'
import '../../styles/Earnings.css'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import { useState } from 'react'
import { useEffect } from 'react'
ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

export const Earnings = () => {
  const [label, setLabel] = useState([]);
  const [firstGraphData, setFirstGraphData] = useState([]);
  const [secondGraphData, setSecondGraphData] = useState([]);

  const getData = () => {
    fetch('https://dackend-data.onrender.com/barGraph')
    .then((res) => res.json())
    .then((res) => {
      console.log(res ,'res');
      setLabel(res.labels);
      setFirstGraphData(res.data.first);
      setSecondGraphData(res.data.second);
    })
  }

  useEffect(() => {
    getData();
  },[]);

  const data = {
    labels: label,
    datasets: [
        {
            data: firstGraphData,
            backgroundColor: '#00D1FF',
            borderRadius: 10,
            barThickness: 7,
            borderWidth: 2,
            borderColor: '#fff'
        },
        {
            data: secondGraphData,
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
      ticks:{
        stepSize: 10
      },
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

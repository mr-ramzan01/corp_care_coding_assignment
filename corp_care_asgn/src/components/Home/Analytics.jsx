import React, { useEffect, useState } from "react";
import "../../styles/Analytics.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import {Chart as ChartJS, LineElement, Title, Tooltip, Legend, CategoryScale, Filler, LinearScale, PointElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement,  Title, Tooltip, Legend, Filler
)

export const Analytics = () => {
  const [label, setLabel] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const getData = () => {
    fetch('https://dackend-data.onrender.com/lineGraph')
    .then((res) => res.json())
    .then((res) => {
      console.log(res ,'res22');
      setLabel(res.labels);
      setGraphData(res.data);
    })
  }

  useEffect(() => {
    getData();
  },[]);

  const data = {
    labels: label,
    datasets: [
      {
        data: graphData,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          return bgGradient(ctx, chartArea);
        },
        borderColor: "#2624FF",
        pointBorderColor: "transparent",
        tension: 0.4,
        fill: true,
      },
    ],
  };
  const bgGradient = (ctx, chartArea) => {
    const {  top, bottom } = chartArea;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0, "#2624FF");
    gradientBackground.addColorStop(1, "rgba(255, 255, 255, 0)");
    return gradientBackground;
  };
  const options = {
    aspectRatio: 2.2,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => "$" + val,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      <div className="analytics">
        <p>Analytics</p>
        <div className="analytics_div">
          <div>
            <div className="analytics__income--button">
              <div className="analytics_income--button__downArrow">
                <AiOutlineArrowRight />
              </div>
              <div className="analytics_income--button__text">Income</div>
            </div>
            <div className="analytics__month--button">
              <p>Sort By</p>
              <div>
                <div className="analytics_month--button__downArrow">
                  <AiOutlineArrowRight />
                </div>
                <div className="analytics_month--button__text">Month</div>
              </div>
            </div>
          </div>
          <div>
              <Line data={data} options={options}></Line>
          </div>
        </div>
      </div>
    </>
  );
};

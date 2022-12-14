import { useEffect, useState } from "react";
import "../../styles/AccountsReached.css";
import {Chart as ChartJS, LineElement, Title, Tooltip, Legend, CategoryScale, Filler, LinearScale, PointElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement,  Title, Tooltip, Legend, Filler
)

export const AccountsReached = () => {
  const [label, setLabel] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch('https://dackend-data.onrender.com/lineGraph')
    .then((res) => res.json())
    .then((res) => {
      setLabel(res.labels);
      setGraphData(res.data);
    })
    .catch((err) => {
      console.log(err, 'error')
    })
    .finally(() => {
      setLoading(false);
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
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
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
  const category = [
    {
      order: "0",
      width: "25px",
      color: "#BCBCBC",
      title: "Day",
    },
    {
      order: "1",
      width: "34px",
      color: "#BCBCBC",
      title: "Week",
    },
    {
      order: "2",
      width: "34px",
      color: "#474747",
      title: "Month",
    },
    {
      order: "4",
      width: "34px",
      color: "#BCBCBC",
      title: "Year",
    },
  ];
  return (
    <>
      <div className="accountsReached">
        <p>Accounts Reached</p>
        <div className="accountsReached_div">
          <p>Accounts Reached</p>
          <p>11,756</p>
          <div className="category">
            {category.map((el) => (
              <p style={{ color: el.color, width: el.width }} key={el.title}>
                {el.title}
              </p>
            ))}
          </div>
          <div className="accountsReached_graph">
            {loading?<img className="accountsReached_loading" src='/Images/loading.gif' alt='loading' />:<Line data={data} options={options}></Line>}
          </div>
        </div>
      </div>
    </>
  );
};

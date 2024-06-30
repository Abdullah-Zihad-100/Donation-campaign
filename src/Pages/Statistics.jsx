import { Chart } from "chart.js/auto";
import {useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

const Statistics = () => {

  const data=[
    {name: "Your donation",value :"5"},
    {name: "Total donation",value :'12'},
  ];
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Your Donation", "Total Donation"],
        datasets: [
          {
            label: "My First Dataset",
            data: data.map((item) => item.value),
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // Prevents the chart from maintaining aspect ratio
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-28">
      <Helmet>
        <title>Dontion Statistics</title>
      </Helmet>
      <canvas
        ref={chartRef}
        width="400" // Set fixed width
        height="400" // Set fixed height
        style={{ maxWidth: "100%", maxHeight: "100%" }} // Make it responsive
      ></canvas>
    </div>
  );
};

export default Statistics;

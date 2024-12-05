/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

const socket = io("http://localhost:5000");

const Analytics3 = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Values Distribution",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    console.log("Connecting to the backend...");

    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        console.log("Initial data fetched:", response.data);
        setData(response.data);
        updateChart(response.data);
        console.log(chartData);
      })
      .catch((error) => console.error("Error fetching initial data:", error));

    socket.on("connect", () => console.log("Socket connected"));
    socket.on("disconnect", () => console.log("Socket disconnected"));

    socket.on("update", (newData) => {
      console.log("New data received via socket:", newData);
      setData((prevData) => {
        const updatedData = [...prevData, newData];
        updateChart(updatedData);
        return updatedData;
      });
    });

    return () => {
      socket.disconnect();
      console.log("Socket disconnected");
    };
  }, []);

  const updateChart = (data) => {
    const labels = data.map((item) => item.key);
    const values = data.map((item) => item.value);

    // Generate dynamic colors
    const dynamicColors = data.map(() => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgba(${r}, ${g}, ${b}, 0.2)`;
    });

    const borderColors = dynamicColors.map((color) =>
      color.replace("0.2", "1") // Replace opacity for borders
    );

    const newChartData = {
      labels,
      datasets: [
        {
          label: "Values Distribution",
          data: values,
          backgroundColor: dynamicColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    };

    console.log("Updated chart data with dynamic colors:", newChartData);
    setChartData(newChartData);
  };

  return (
    <div className="m-10 ml-40 h-[500px] w-[500px]">
      <Pie data={chartData} />
    </div>
  );
};

export default Analytics3;

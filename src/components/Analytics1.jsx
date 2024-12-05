/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const socket = io("http://localhost:5000");

const Analytics1 = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Values Over Time",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
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
    const newChartData = {
      labels,
      datasets: [
        {
          label: "Values Over Time",
          data: values,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
          borderWidth: 2,
        },
      ],
    };
    console.log("Updated chart data:", newChartData);
    setChartData(newChartData);
  };

  return (
    <div className=" m-10  ml-40 h-[1000px] w-[1000px]">
      <Line data={chartData} />
    </div>
  );
};

export default Analytics1;

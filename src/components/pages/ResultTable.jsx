/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./ResultTable.css";
import { data } from "../../data/data";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const ResultTable = ({ response }) => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    if (response && response?.predictions) {
      const predictions = response.predictions;
      const updatedData = data.map((item, index) => {
        return {
          ...item,
          prediction: parseFloat(predictions[index]) *100, // Keep as numerical value
          predictionString: `${(parseFloat(predictions[index] )* 100).toFixed(2)} %`, // Add a string version for display in table
        };
      });

      setMergedData(updatedData);
    }
  }, [response]);

  const columns = [
    {
      name: "Organs",
      selector: (row) => row.organs,
      sortable: false,
    },
    {
      name: "Predictions",
      selector: (row) => row.predictionString,
      sortable: false,
    },
  ];

  const chartData = {
    labels: mergedData.map((item) => item.organs),
    datasets: [
      {
        label: "Predictions",
        data: mergedData.map((item) => item.prediction),
        backgroundColor: "rgba(137, 38, 182, 0.5)",
        borderColor: "rgba(137, 38, 182, 1)",
        borderWidth: 1,
      },
    ],
  };


  return (
    <div>
      <div className="table-container">
        <DataTable
          columns={columns}
          data={mergedData}
          fixedHeader
          customStyles={{
            // Custom styles object for further customization
            headRow: {
              style: {
                backgroundColor: "#fff", // Background color of header row
              },
            },
            headCells: {
              style: {
                fontSize: "18px", // Font size of header cells
                fontWeight: "bold", // Font weight of header cells
                color: "#8926B6", // Text color of header cells
                justifyContent: "center",
              },
            },
            rows: {
              style: {
                backgroundColor: "#E7DDFF", // Background color of rows
                fontSize: "14px", // Font size of rows
                color: "#8926B6", // Text color of rows
                fontWeight: "bold",
              },
            },
          }}
          customTheme={{
            // Custom theme object for further customization
            stripes: {
              // Background color of striped rows
              default: "#f0f0f0",
              selected: "#ddd",
            },
          }}
        />
      </div>
      <div className="table-container chart-container">
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

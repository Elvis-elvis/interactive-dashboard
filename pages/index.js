import React, { useState, useEffect } from "react";
import FilterBar from "../Components/FilterBar";
import PriceDisplay from "../Components/PriceDisplay";
import Chart from "../Components/Chart";
import Image from "next/image";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/database.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = filter
    ? data.filter((item) => item.saison === filter)
    : data;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Image
        src="/assets/logo.png"
        alt="Company Logo"
        width={200}
        height={100}
      />

      <h1 style={{ fontSize: "2rem", marginTop: "10px" }}>
        Interactive Dashboard
      </h1>

      <FilterBar filter={filter} setFilter={setFilter} />

      <PriceDisplay data={filteredData} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <Chart data={filteredData} title="Price by Season" dataKey="saison" />
        <Chart data={filteredData} title="Price by Level" dataKey="niveau" />
      </div>
    </div>
  );
};

export default Dashboard;

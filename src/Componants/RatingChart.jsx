import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratingData }) => {
  const reversedData = [...ratingData].reverse();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={reversedData}
        layout="vertical"
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="rgba(0, 0, 0, 0.05)" horizontal={false} />

        <XAxis type="number" allowDecimals={false} />

        <YAxis
          dataKey="name"
          type="category"
          width={60}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{ fill: "rgba(240, 240, 240, 0.5)" }}
          contentStyle={{ background: "#fff", border: "1px solid #ddd" }}
          labelStyle={{ fontWeight: "bold" }}
        />

        <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;

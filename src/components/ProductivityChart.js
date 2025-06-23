import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const ProductivityChart = ({ tasks }) => {
  const data = dias.map((dia) => ({
    dia,
    tarefas: tasks.filter((t) => t.dia === dia).length,
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 style={{ marginBottom: "10px" }}>Relatório de Produtividade</h3>
      <BarChart width={600} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dia" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="tarefas" fill="blue" />
      </BarChart>
    </div>
  );
};

export default ProductivityChart;

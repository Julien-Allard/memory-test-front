import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";
import "./Chart.scss";

export default function Chart({ data }) {
  const chartData = [
    { name: "Jan", value: data[0], fill: "#949398FF" },
    { name: "Feb", value: data[1], fill: "#F4DF4EFF" },
    { name: "Mar", value: data[2], fill: "#FC766AFF" },
    { name: "Apr", value: data[3], fill: "#5B84B1FF" },
    { name: "May", value: data[4], fill: "#5F4B8BFF" },
    { name: "Jun", value: data[5], fill: "#E69A8DFF" },
    { name: "Jul", value: data[6], fill: "#42EADDFF" },
    { name: "Aug", value: data[7], fill: "#CDB599FF" },
    { name: "Sept", value: data[8], fill: "#00A4CCFF" },
    { name: "Oct", value: data[9], fill: "#F95700FF" },
    { name: "Nov", value: data[10], fill: "#00539CFF" },
    { name: "Dec", value: data[11], fill: "#EEA47FFF" },
  ];

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

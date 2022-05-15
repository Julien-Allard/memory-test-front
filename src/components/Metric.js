import "./Metric.scss";

export default function Metric({ title, data, currency }) {
  return (
    <div className="metric-container">
      <h3>{title}</h3>
      <div className="result">
        <p>{currency}</p>
        <p>{data}</p>
      </div>
    </div>
  );
}

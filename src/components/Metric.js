import "./Metric.scss";

export default function Metric({ title, data, currency }) {
  return (
    <div className="metric-container">
      <h3>{title}</h3>
      <div className="result">
        <p>{currency}</p>
        {data > 999999 ? (
          <>
            <p>{(data / 1000000).toFixed(1)}</p>
            <p>M</p>
          </>
        ) : (
          <p>{data}</p>
        )}
      </div>
    </div>
  );
}

import { useContext } from "react";
import Chart from "../components/Chart";
import Metric from "../components/Metric";
import Selector from "../components/Selector";
import { DashboardContext } from "../Context/DashboardContext";
import "./Dashboard.scss";

export default function Dashboard() {
  const { data, state, setState, isLoading } = useContext(DashboardContext);

  return (
    <div className="dashboard-container">
      <h1>Memory - SuperStore</h1>
      {isLoading ? (
        <div className="loading-text">
          <p>All datas are loading, please wait...</p>
        </div>
      ) : (
        <>
          <Selector
            data={data}
            title={"State"}
            changeData={setState}
            defaultValue={state}
          />
          <div className="all-metrics-container">
            <Metric title={"Revenue"} data={data.totalRevenue} currency={"$"} />
            <Metric
              title={"Revenue / order"}
              data={data.averageRevenuePerOrder}
              currency={"$"}
            />
            <Metric title={"Customers"} data={data.uniqueCustomers} />
          </div>
          <h2>Revenue Per Month</h2>
          <Chart data={data.revenuePerMonth} />
        </>
      )}
    </div>
  );
}

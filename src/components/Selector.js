import "./Selector.scss";
import ArrowDown from "../assets/icons/downward-arrow.png";
import { v4 as uuidv4 } from "uuid";

export default function Selector({ data, title, changeData, defaultValue }) {
  const handleChange = (event) => {
    changeData(event.target.value);
  };

  return (
    <div className="state-selector">
      <p className="state-title">{title}</p>
      <div className="state-menu">
        <div className="arrow-container">
          <img src={ArrowDown} alt="arrow icon" />
        </div>
        <select onChange={handleChange} value={defaultValue}>
          <option value="">All</option>
          {data.allStates.map((state) => (
            <option value={state} key={uuidv4()}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

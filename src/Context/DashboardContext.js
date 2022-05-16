import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DashboardContext = createContext();

export const DashboardProvider = (props) => {
  const [data, setData] = useState();
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://memory-test-back.herokuapp.com/transactions?state=${state}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [state]);

  return (
    <DashboardContext.Provider value={{ data, state, setState, isLoading }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

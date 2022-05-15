import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import { DashboardProvider } from "./Context/DashboardContext";

function App() {
  return (
    <DashboardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </DashboardProvider>
  );
}

export default App;

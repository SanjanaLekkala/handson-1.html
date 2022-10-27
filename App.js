import "./App.css";
import Event from "./components/Events/event";
import { Routes, Route } from "react-router-dom";
import Science from "./components/our science/science";
import Patient from "./components/patient/patient";
import About from "./components/about us/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Patient />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/science" element={<Science />} />
      </Routes>
    </div>
  );
}

export default App;

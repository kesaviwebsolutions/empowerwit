import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Trainings from "./components/Trainings";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tarining-area/:slug" element={<Trainings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

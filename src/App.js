import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Trainings from "./components/Trainings";
import MobileHome from "./Mobile/Mobilepages/MobileHome";
import { BrowserView, MobileView } from 'react-device-detect';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<><BrowserView><Home /></BrowserView> <MobileView><MobileHome /></MobileView></>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tarining-area/:slug" element={<Trainings />} />
          {/* <Route path='/about-us' element={<Mobileabout />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

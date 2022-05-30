import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Trainings from "./components/Trainings";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route path="/tarining-area/:slug" component={Trainings}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/courses" component={Courses}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

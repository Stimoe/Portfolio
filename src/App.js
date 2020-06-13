import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About/index";
import Projects from "./Pages/Projects/index";
function App() {
  return (
    <Router>
      <div className="router-div">
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;

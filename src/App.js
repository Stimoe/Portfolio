import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/index";
import Projects from "./Pages/Projects/index";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;

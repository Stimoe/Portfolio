import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About/index";
import Projects from "./Pages/Projects/index";
import Contacts from "./Pages/Contact/index";
function App() {
  return (
    <Router>
      <div className="router-div">
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/Personal-Profile/' component={Home} />
        <Route exact path="/Personal-Profile/home" component={Home} />
        <Route exact path="/Personal-Profile/about" component={About} />
        <Route exact path="/Personal-Profile/portfolio" component={Portfolio} />
        <Route exact path="/Personal-Profile/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;

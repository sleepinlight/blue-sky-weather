import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeView from "./HomeView";
import SevenDayForecast from "./SevenDayForecast";

const Index = () => <h2>Current</h2>;
const About = () => <h2>Forecast</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forecast/">Forecast</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={HomeView} />
      <Route path="/forecast/" component={SevenDayForecast} />
    </div>
  </Router>
);

export default AppRouter;
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeView from "./HomeView";
import SevenDayForecast from "./SevenDayForecast";

const AppRouter = ({...props}) => (
  
  <Router>
    <div>
      

      <Route path="/" exact render={() => <HomeView {...props}/> }/>
      <Route path="/forecast/" render={() => <SevenDayForecast {...props}/> } />

      <nav className="app-router-nav">
        <ul className="forecast-panel-menu">
          <li>
            <Link to="/">Home</Link>
            
          </li>
          <li>
            <Link to="/forecast/">Forecast</Link>
          </li>
        </ul>
      </nav>
    </div>
  </Router>
);

export default AppRouter;
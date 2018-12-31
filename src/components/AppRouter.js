import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeView from "./HomeView";
import SevenDayForecast from "./SevenDayForecast";
import AppSettings from "./AppSettings";
import LocationsView from "./LocationsView";

const AppRouter = ({...props}) => (
  
  <Router>
    <div>

      <Route path="/" exact render={() => <HomeView {...props}/> }/>
      <Route path="/forecast/" render={() => <SevenDayForecast {...props}/> } />
      <Route path="/locations/" render={() => <LocationsView/>} />
      <Route path="/settings/" render={() => <AppSettings/>} />

      <nav className="app-router-nav">
        <ul className="forecast-panel-menu">
          <li>
            <Link to="/"><i className="fa fa-sun-o" aria-hidden="true"></i></Link>
          </li>
          <li>
            <Link to="/forecast/"><i className="fa fa-hourglass" aria-hidden="true"></i></Link>
          </li>
          <li>
            <Link to="/locations/"><i className="fa fa-map-marker" aria-hidden="true"></i></Link>
          </li>
          <li>
            <Link to="/settings/"><i className="fa fa-gear" aria-hidden="true"></i></Link>
          </li>
        </ul>
      </nav>
    </div>
  </Router>
);

export default AppRouter;
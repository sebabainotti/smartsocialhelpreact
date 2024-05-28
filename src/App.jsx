import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateCauseContainer from './containers/CreateCauseContainer';
import ListCausesContainer from './containers/ListCausesContainer';
import DetailCauseContainer from './containers/DetailCauseContainer';
import ContactContainer from './containers/ContactContainer';
import How from './pages/How';
import Who from './pages/Who';
import CommingSoon from './pages/CommingSoon';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <CommingSoon /> }
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export const urlHost = "http://localhost:3000";

export default AppWrapper;

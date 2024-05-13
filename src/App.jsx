import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes
} from "react-router-dom";
import Home from './pages/Home';
import CreateCause from './pages/CreateCause';
import ListCauses from './pages/ListCauses';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "create", element: <CreateCause /> },
    { path: "list", element: <ListCauses /> },
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

export default AppWrapper;

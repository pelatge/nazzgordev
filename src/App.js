import { hot } from 'react-hot-loader/root';
import React from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { appRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <Routes>
        {appRoutes.map(route => <Route {...route} />)}
      </Routes>
    </Router>
  );
}

export default hot(App);

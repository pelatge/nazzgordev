// import { React , BrowserRouter as Router,Route } from './libraries';
import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'
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

export default App;

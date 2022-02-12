import { hot } from 'react-hot-loader/root';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { appRoutes } from './routes';

class App extends React.Component {
  render() {
  
    return (
      <>
      <Router>
      <Routes>
        {appRoutes.map(route => <Route {...route} />)}
      </Routes>
      </Router>
      </>
    );
  }
}

export default hot(App);

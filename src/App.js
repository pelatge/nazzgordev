import { React as react, BrowserRouter as Router,Route } from './libraries';
import { appRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => <Route {...route} />)}
      </Switch>
    </Router>
  );
}

export default App;

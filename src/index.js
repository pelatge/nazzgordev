import { React, ReactDOM } from './libraries';
// import { store } from './modules';
import App from './App';
import './styles.css';



ReactDOM.render(
       <App />,
  document.getElementById('app')
);

module.hot.accept();

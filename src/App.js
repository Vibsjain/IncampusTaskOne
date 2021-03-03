import './App.css';
import { Component } from 'react';
import { Provider } from "react-redux"
import Store from "./store";
import Front from './displayPage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
      <Router>
      <Switch>
      <Route exact path="/" component={Front} />
      </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;

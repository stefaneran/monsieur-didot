import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Homes from './views/Homes'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header route="/homes" />
        <Switch>
          <Redirect from="/" exact to="/homes/1"/>
          <Route path="/homes/:id" component={Homes} />
          <Route path="/hosts">
            <p>This is where Hosts would be</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

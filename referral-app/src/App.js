import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import LinkPage from './linkPage/LinkPage'
import LandingPage from './landingPages/LandingPage'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <Router >
          <Switch>
            <Route path='/:pageTitle'>
              <LandingPage />
            </Route>
            <Route exact path='/'>
              <LinkPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

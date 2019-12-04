import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import LinkPage from './linkPage/LinkPage'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <Router >
          <Switch>
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

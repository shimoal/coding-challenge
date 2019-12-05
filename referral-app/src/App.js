import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import LinkPage from './linkPage/LinkPage'
import LandingPage from './landingPages/LandingPage'
import Footer from './Footer'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <main>
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
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

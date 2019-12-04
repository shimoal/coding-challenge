import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import LinkPage from './linkPage/LinkPage'
import store from './redux/store'

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <LinkPage />
      </div>
    </Provider>
  );
}

export default App;

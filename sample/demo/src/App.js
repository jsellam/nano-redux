import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import { createStore } from 'redux'

import userRedux from './redux/UserRedux'
import Home2 from './containers/Home2'


const store = createStore(userRedux.getReducers(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


class App extends Component {

  constructor(props)
  {
    super(props)
    console.log('user redux build',userRedux)
  }

//
// 
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <div>
        <Home2 />
       </div>
      
      </div>
      </Provider>
    );
  }
}

export default App


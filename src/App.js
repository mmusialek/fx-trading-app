import React, {Component} from 'react';
import './App.css';
import './assets/style/styles.scss'

import {CurrencyExchangeList} from "./containers/currency-exchange-list";

class App extends Component {
  render() {
    return (
      <CurrencyExchangeList/>
    );
  }
}

export default App;

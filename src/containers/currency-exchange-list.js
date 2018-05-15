import React from "react";
import {CurrencyExchangeTeaser} from "../components/currency-exchange-teaser";
import "./currency-exchange-list.scss";

export class CurrencyExchangeList extends React.Component {

  __intervalHandle;

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.setState({
      exchanges: []
    });


    this.__intervalHandle = setInterval(p => {// load data
      const data = this.getData();

      // convert, map data to our model
      for (let item of data) {
        const split = item.pair.split(" ");
        item.exchangeFromName = split[0];
        item.exchangeToName = split[1];
      }

      this.setState({
        exchanges: data
      });
      console.log("data changed...");

    }, 1000);

  }

  componentWillUnmount() {
    if (this.__intervalHandle) {
      clearInterval(this.__intervalHandle);
    }
  }

  getData() {
    return [
      {"pair": "USD CHF", "buy": this.getRandom(0.99143, 0.99163), "sell": this.getRandom(0.99043, 0.99143)},
      {"pair": "USD JPY", "buy": this.getRandom(110.467, 110.567), "sell": this.getRandom(110.417, 110, 517)},
      {"pair": "GBP USD", "buy": this.getRandom(1.28495, 1,28595), "sell": this.getRandom(1.2836, 1.2936)},
      {"pair": "GBP CHF", "buy": this.getRandom(1.27378, 1.27478), "sell": this.getRandom(1.27147, 1.27247)},
      {"pair": "EUR SEK", "buy": this.getRandom(9.632, 9.736), "sell": this.getRandom(9.6055, 9.6155)},
      {"pair": "EUR JPY", "buy": this.getRandom(120.589, 120.689), "sell": this.getRandom(120.491, 120.591)}
    ]
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  render() {
    return (
      <div className="vth-currency-exchange-list">
        {this.state.exchanges.map((item, index) => {
          return <CurrencyExchangeTeaser className="vth-currency-exchange-list__item" key={item.pair} exchangeFromName={item.exchangeFromName} exchangeToName={item.exchangeToName}
                                         buyPrice={item.buy} sellPrice={item.sell}/>
        })}
      </div>
    );
  }
}

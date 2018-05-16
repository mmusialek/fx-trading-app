import React from "react";
import PropTypes from "prop-types";
import './currency-exchange-teaser.scss';

export class CurrencyExchangeTeaser extends React.Component {

  constructor(props){
    super(props);

  }

  componentWillMount() {
    this.setState({
      isGrowing: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // set indicator state
    if (prevProps.buyPrice !== this.props.buyPrice) {
      if (prevProps.buyPrice < this.props.buyPrice) {
        this.setState({
          isGrowing: true
        });
      } else {
        this.setState({
          isGrowing: false
        });
      }
    }
  }


  render() {

    const indicatorClass = this.state.isGrowing ?
      "vth-currency-exchange-teaser__body__indicator--positive" :
      "vth-currency-exchange-teaser__body__indicator--negative";

    // let's assume that we have 5 fraction digits
    const fractionDigits = 5;


    // create price number as string array
    let buyString = [];
    const buyPriceString = this.props.buyPrice.toFixed(fractionDigits).toString();
    for (let key in buyPriceString) {
      if (!buyPriceString.hasOwnProperty(key)) {
        continue;
      }

      buyString.push(<span key={key}>{buyPriceString[key]}</span>);
    }

    // create price number as string array
    let sellString = [];
    const sellPriceString = this.props.sellPrice.toFixed(fractionDigits).toString();
    for (let key in sellPriceString) {
      if (!sellPriceString.hasOwnProperty(key)) {
        continue;
      }

      sellString.push(<span key={key}>{sellPriceString[key]}</span>);
    }

    return (
      <div className={"vth-currency-exchange-teaser " + this.props.className}>
        <div className="vth-currency-exchange-teaser__header">
          {this.props.exchangeFromName} {this.props.exchangeToName}
        </div>

        <div className="vth-currency-exchange-teaser__body">
          <div className="vth-currency-exchange-teaser__body__data vth-currency-exchange-teaser__body__data--sell">
            <div className="vth-currency-exchange-teaser__body__data__wrapper">
              <span className="vth-currency-exchange-teaser__body__data__wrapper__label">Sell {this.props.exchangeFromName}</span>
              <span className="vth-currency-exchange-teaser__body__data__wrapper__value">{sellString}</span>
            </div>
            <div className="vth-currency-exchange-teaser__body__arrow vth-currency-exchange-teaser__body__arrow--right">
              <div className="vth-currency-exchange-teaser__body__arrow__inner"/>
            </div>
          </div>

          <div className={"vth-currency-exchange-teaser__body__indicator " + indicatorClass}>
          </div>

          <div className="vth-currency-exchange-teaser__body__data vth-currency-exchange-teaser__body__data--buy">

            <div className="vth-currency-exchange-teaser__body__arrow vth-currency-exchange-teaser__body__arrow--left">
              <div className="vth-currency-exchange-teaser__body__arrow__inner"/>
            </div>

            <div className="vth-currency-exchange-teaser__body__data__wrapper">
              <span className="vth-currency-exchange-teaser__body__data__wrapper__label">Buy {this.props.exchangeFromName}</span>
              <span className="vth-currency-exchange-teaser__body__data__wrapper__value">{buyString}</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


CurrencyExchangeTeaser.propTypes = {
  className: PropTypes.string,
  exchangeFromName: PropTypes.string,
  exchangeToName: PropTypes.string,
  sellPrice: PropTypes.number,
  buyPrice: PropTypes.number
};

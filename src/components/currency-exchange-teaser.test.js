import {mount} from "enzyme";
import React from 'react';
import ReactDOM from 'react-dom';
import {CurrencyExchangeTeaser} from "./currency-exchange-teaser";

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });


describe("GIVEN CurrencyExchangeTeaser", () => {

  let props;
  let mountedComponent;

  const currencyExchangeComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <CurrencyExchangeTeaser {...props} />
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      exchangeFromName: undefined,
      exchangeToName: undefined,
      buyPrice: undefined,
      sellPrice: undefined
    };
    mountedComponent = undefined;
  });

  it('WHEN component is created THEN it is not crashing', () => {

    props.exchangeFromName = "EUR";
    props.exchangeToName = "USD";
    props.buyPrice = 0.00111;
    props.sellPrice = 1.123;

    const elem = currencyExchangeComponent().find(CurrencyExchangeTeaser);

    expect(elem.length).toBeGreaterThan(0);
  });

  it('WHEN buyPrice is changed to higher THEN indicator is green', () => {

    props.exchangeFromName = "EUR";
    props.exchangeToName = "USD";
    props.buyPrice = 0.00111;
    props.sellPrice = 1.123;

    const elem = currencyExchangeComponent().find(CurrencyExchangeTeaser);

    props.buyPrice = 0.00222;

  });

});



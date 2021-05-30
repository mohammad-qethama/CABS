'use strict';

const { expect } = require('@jest/globals');
const {eventLogger,eventLoggerTransit,eventLoggerPick} = require('../capsHandler.js');
let consoleSpy;
const Order = {
  storeName:'sad'
  , orderId: '123123'
  , customerName: 'JonDoe'
  , address:'amman jordan'
};

describe('testing driver.js functions', ()=>{

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log');

  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log out when called ', ()=>{

    eventLogger(Order);
    expect(consoleSpy).toBeCalled();


  });
  it('should log out when called ', ()=>{

    eventLoggerTransit(Order);
    expect(consoleSpy).toBeCalled();


  });
  it('should log out when called ', ()=>{

    eventLoggerPick(Order);
    expect(consoleSpy).toBeCalled();


  });

});

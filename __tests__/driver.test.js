'use strict';
let driver = require('../modules/driver/driverHandlers.js');


const payload={orderId:21454};

let consoleSpy;

describe('testing driver.js functions', ()=>{

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log');

  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log out orderId ', ()=>{
    jest.useFakeTimers();

    driver.pickupHandler(payload);
    setTimeout( ()=>{
      expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
    },1000);
    jest.runAllTimers();


  });

  it('should log out orderId ', ()=>{
    jest.useFakeTimers();
    driver.startTransit(payload);
    setTimeout( ()=>{
    //   console.log(delivered.log);
      expect(consoleSpy).toHaveBeenCalledWith(`delivered`);
    },3000);

    jest.runAllTimers();





  });


});

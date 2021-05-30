'use strict';
const event = require('../../events.js');

function pickupHandler(payload){
  setTimeout(function()
  {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    event.emit('in-transit', payload );

  }, 1000);
}


function startTransit(payload){

  setTimeout(function()
  {
    console.log(`delivered`);
    event.emit('delivered', payload);

  }, 3000);
}

module.exports = {pickupHandler:pickupHandler,startTransit:startTransit };

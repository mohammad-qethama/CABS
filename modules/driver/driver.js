'use strict';

const event = require('../../events.js');
const {pickupHandler,startTransit} = require('./driverHandlers.js');


event.on('pickup',pickupHandler);
event.on('in-transit',startTransit);






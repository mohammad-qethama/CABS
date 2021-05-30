'use strict';

require('./modules/vendor/vendor.js');
require('./modules/driver/driver.js');

const event = require('./events.js');
const {eventLogger,eventLoggerPick,eventLoggerTransit} = require('./capsHandler.js');

event.on('delivered',eventLogger);
event.on('pickup',eventLoggerPick);
event.on('in-transit',eventLoggerTransit);




'use strict';

require('dotenv').config();
const faker = require('faker');

const event = require('../../events.js');

event.on('delivered',()=>{
  console.log('thank you');
});

setInterval(()=>{
  let Order = {
    storeName:process.env.STORE_NAME
    , orderId: faker.datatype.uuid()
    , customerName: faker.name.findName()
    , address:faker.address.cityName()
  };
  event.emit('pickup',Order);


},5000);

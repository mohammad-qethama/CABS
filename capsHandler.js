'use strict';

function eventLogger(payload){
  let info = {
    event:'delivered',
    time:(new Date()).toISOString(),
    payload:payload
  };
  console.log(info);
}

function eventLoggerPick(payload){
  let info = {
    event:'pickup',
    time:(new Date()).toISOString(),
    payload:payload
  };
  console.log(info);
}

function eventLoggerTransit(payload){
  let info = {
    event:'in-transit',
    time:(new Date()).toISOString(),
    payload:payload
  };
  console.log(info);
}

module.exports= {eventLogger:eventLogger
  ,eventLoggerPick:eventLoggerPick,
  eventLoggerTransit:eventLoggerTransit};

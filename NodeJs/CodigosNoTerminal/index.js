const moment = require('moment')

function sayHello(){
  console.log('hello world');
  console.log(moment().format('HH:mm'))
}

sayHello()
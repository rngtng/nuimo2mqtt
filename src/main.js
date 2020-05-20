'use strict'

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost');

// client.subscribe('presence')
// client.publish('presence', 'bin hier')
// client.on('message', function (topic, message) {
//   console.log(message)
// })
// client.end()

client.on('connect', function () {
  console.log('Hi')
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

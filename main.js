var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {

  console.log('peripheral with ID ' + peripheral.id + ' found');
  var advertisement = peripheral.advertisement;

  var localName = advertisement.localName;
  var txPowerLevel = advertisement.txPowerLevel;
  var manufacturerData = advertisement.manufacturerData;
  var serviceData = advertisement.serviceData;
  var serviceUuids = advertisement.serviceUuids;

  if (localName) {
    console.log('  Local Name        = ' + localName);
  }

  if (txPowerLevel) {
    console.log('  TX Power Level    = ' + txPowerLevel);
  }

  if (manufacturerData) {
    console.log('  Manufacturer Data = ' + manufacturerData.toString('hex'));
  }

  if (serviceData) {
    console.log('  Service Data      = ' + JSON.stringify(serviceData, null, 2));
  }

  if (serviceUuids) {
    console.log('  Service UUIDs     = ' + serviceUuids);
  }

  console.log();

});

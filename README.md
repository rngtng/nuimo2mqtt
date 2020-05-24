# numio2mqtt

## Sources
* https://github.com/mqttjs/MQTT.js
* https://github.com/pryomoax/rocket-nuimo-node


## USB in docker on Mac
* https://christopherjmcclellan.wordpress.com/2019/04/21/using-usb-with-docker-for-mac/#tldr

```
docker-init:
	docker-machine create -d virtualbox default
	docker-machine stop
	modifyvm default --usbehci on

docker-start:
	docker-machine start
	vboxmanage usbfilter add 0 --target default --name bluetooth --vendorid 0x0a12 --productid 0x0001
	eval $(docker-machine env default)
```


## Other

* https://github.com/riker09/Nuimo-MQTT-Bridge

* https://github.com/tolleiv/nuimo-mqtt-manager


## Hass.io AddOn

* https://github.com/OpenZWave/Zwave2Mqtt
* https://github.com/danielwelch/hassio-zigbee2mqtt


### Discovery

<!-- homeassistant/[DEVICE_TYPE]/[IEEEADDR]/[OBJECT_ID]/config -->

* https://www.home-assistant.io/docs/mqtt/discovery/
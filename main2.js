let Nuimo = require("nuimojs"), nuimo = new Nuimo();

nuimo.on("discover", (device) => {

	    console.log(`Discovered Nuimo (${device.uuid})`);

	    device.on("connect", () => {
		            console.log("Nuimo connected");
		        });

	    device.on("disconnect", () => {
		            console.log("Nuimo disconnected");
		        });

	    device.on("batteryLevelChange", (level) => {
		            console.log(`Battery level changed to ${level}%`);
		        });

	    device.on("rssiChange", (rssi) => {
		            console.log(`Signal strength (RSSI) changed to ${rssi}`);
		        });

	    device.connect(() => {
		            console.log(`Battery level is ${device.batteryLevel}%`);
		            console.log(`Signal strength (RSSI) is ${device.rssi}`);
		        });

});

nuimo.scan();

import { DeviceDiscoveryManager } from 'rocket-nuimo'

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://megatonne.fritz.box', {
  username: 'my_user',
  password: 'my_password'
});

client.on('connect', function () {
  console.log('Connected to MQTT')
})

// Device connection manager
const manager = DeviceDiscoveryManager.defaultManager

/**
 * Main application entry point
 */
async function main() {
    console.log('Starting Numio Control discovery')

    // Create a new discovery session
    const session = manager.startDiscoverySession()

    console.log('Waiting for device...')

    // Convenience to await the first discovered Nuimo device
    const device = await session.waitForFirstDevice()

    console.log(`Found device '${device.id}'`)
    console.log('Connecting...')

    // Establish device connection
    if (await device.connect()) {
        console.log('Connected to Nuimo Control')

        device.on('selectDown', () => {
          client.publish('presence', 'Display button presses')
          console.log('DEVICE INFO:')
          console.log(`ID:      ${device.id}`)
          console.log(`RSSI:    ${device.rssi}`)
          console.log(`BATTERY: ${device.batteryLevel}`)
        })

        device.on('selectUp', () => {
          client.publish('presence', 'Display button released')

        })

        // If the device gets disconnected, exit the app
        device.on('disconnect', () => {
            console.log('Disconnected! Exiting.')

            // On a disconnect, exit
            process.exit(0)

            client.end()
        })
    }
}

// Boot strap async function
main().catch((err) => {
  console.log(err)
})





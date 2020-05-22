import { DeviceDiscoveryManager } from 'rocket-nuimo'

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://megatonne.fritz.box', {
  username: 'my_user',
  password: 'my_password'
});

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

        client.on('connect', function () {
          console.log('Hi')
          client.subscribe('presence', function (err) {
            if (!err) {
              client.publish('presence', 'Hello mqtt')
            }
          })
        })

        // client.on('message', function (topic, message) {
        //   // message is Buffer
        //   console.log(message.toString())
        //   if (message.toString() == 'end') {

        //   }
        // })

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





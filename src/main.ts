import { DeviceDiscoveryManager } from 'rocket-nuimo'

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

        device.addListener('rssi', (rssi) => {
          console.log(`RSSI:    ${rssi}`)
        })

        device.on('selectDown', () => {
          console.log('DEVICE INFO:')
          console.log(`ID:      ${device.id}`)
          console.log(`RSSI:    ${device.rssi}`)
          console.log(`BATTERY: ${device.batteryLevel}`)
        })

        // If the device gets disconnected, exit the app
        device.on('disconnect', () => {
            console.log('Disconnected! Exiting.')

            // On a disconnect, exit
            process.exit(0)
        })
    }
}

// Boot strap async function
main().catch((err) => {
  console.log(err)
})

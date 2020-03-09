
Was able to discover numio but not connect:

- docker image, debian buster,  bluez 5.50, mount dbus: /var/run/dbus/system_bus_socket
- or w dbus inside `mkdir -p /var/run/dbus; dbus-daemon --config-file=/usr/share/dbus-1/system.conf --print-address`
- stopped bluez (4.4) on host machine,
```
sudo /usr/syno/sbin/synoservicectl --stop bluetoothd
ps ax | grep blue
```
- `bluetoothd -n` -> move background
- `nuimoctl --connect c5:e4:24:fb:9f:f2`
- `echo "power on" | bluetoothctl`



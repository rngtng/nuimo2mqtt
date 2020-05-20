dbus-daemon --config-file=/usr/share/dbus-1/system.conf --print-address
bluetoothd -n &
echo "power on" | bluetoothctl
nuimoctl --connect c5:e4:24:fb:9f:f2

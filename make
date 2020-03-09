build () {
  docker build -t nuimo:python .
}

run () {
  docker run -v /var/run/dbus:/var/run/dbus  --rm -it --privileged --cap-add=ALL --net=host nuimo:python bash
}

run2 () {

  docker run -v /dev/bus/usb:/dev/bus/usb  --rm -it --privileged --cap-add=ALL --net=host nuimo:python bash
}
$1

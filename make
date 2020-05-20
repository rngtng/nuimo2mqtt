build () {
  sudo docker build -t nuimo:js .
}

run () {
  sudo docker run -v `pwd`:/nuimo --rm -it --net=host nuimo:js bash
}

$1

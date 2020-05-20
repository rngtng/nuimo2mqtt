build () {
  sudo docker build -t nuimo:python .
}

run () {
  sudo docker run  --rm -it --privileged --cap-add=ALL --net=host nuimo:python bash
}

$1

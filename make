IMAGE_TAG=rngtng/nuimo2mqtt:local

build () {
  sudo docker build -t $IMAGE_TAG .
}

run () {
  sudo docker run --rm -v $$PWD/src:/app/src -it --net=host $IMAGE_TAG bash
}

$1

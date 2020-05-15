IMAGE_TAG = rngtng/nuimo2mqtt:local

build:
	docker build -t $(IMAGE_TAG) .

dev: build
	docker run --mount type=bind,source=/proc/1/ns/,target=/rootns --privileged --net=host --rm -v $$PWD:/app -it $(IMAGE_TAG) bash

dev2:
	docker run --privileged --cap-add=ALL --rm -v $$PWD:/app -it $(IMAGE_TAG) bash

mega:
	sudo docker run --rm  -it $IMAGE_TAG bash


IMAGE_TAG = rngtng/nuimo2mqtt:local

build:
	docker build -t $(IMAGE_TAG) .

dev: build
	docker run --rm -v $$PWD/src:/app/src -it $(IMAGE_TAG) bash

dev2:
	docker run --mount type=bind,source=/proc/1/ns/,target=/rootns --privileged --net=host --cap-add=ALL --rm -v $$PWD:/app -it $(IMAGE_TAG) bash

mega:
	sudo docker run --rm  -it $IMAGE_TAG bash

deploy:
	git add .
	git commit -m "next"
	git push
	ssh tobi@megatonne.fritz.box -p 223 "cd ~/nuimo2mqtt && git pull"
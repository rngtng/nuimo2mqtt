FROM node:8.12-stretch

RUN apt-get update
RUN apt-get -y install --no-install-recommends bluetooth  bluez libbluetooth-dev libudev-dev
RUN npm install noble

WORKDIR /nuimo

CMD node interaction.js

FROM node:14

RUN mkdir /app
WORKDIR /app

# RUN git clone https://github.com/pryomoax/rocket-nuimo-node.git
# RUN cd rocket-nuimo-node && yarn install
# RUN yarn add rocket-nuimo

COPY README.md .

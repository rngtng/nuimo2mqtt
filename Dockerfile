FROM node:14

RUN mkdir /app
RUN mkdir /app/dist
WORKDIR /app

# RUN git clone https://github.com/pryomoax/rocket-nuimo-node.git
# RUN cd rocket-nuimo-node && yarn install

RUN yarn global add typescript --dev
RUN yarn global add eslint@6.8.0 --dev
RUN yarn global add eslint-config-airbnb --dev
RUN yarn add @types/node --dev

# @typescript-eslint/eslint-plugin@latest
# eslint-config-airbnb-base@latest
# eslint@^5.16.0 || ^6.8.0
# eslint-plugin-import@^2.20.1
# @typescript-eslint/parser@latest

RUN yarn add rocket-nuimo
RUN yarn add mqtt

COPY src src
COPY .eslintrc.js .
COPY tsconfig.json .

RUN tsc src/index.ts

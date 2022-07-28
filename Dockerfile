FROM node:alpine

MAINTAINER arunodhayamsam

USER root

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start"]

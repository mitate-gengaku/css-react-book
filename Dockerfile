FROM node:22.13.1-bullseye

USER root

RUN npm i -g npm@latest vercel@latest npm-check-updates
RUN apt-get update && apt-get -y install vim git

COPY ./src /home/node/book
RUN chown -R node:node /home/node/book

USER node
WORKDIR /home/node/book
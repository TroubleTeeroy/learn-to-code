# syntax=docker/dockerfile:1
FROM node:14-alpine
WORKDIR /home/node/app
COPY . .
RUN npm install
RUN chown -R node:node .
EXPOSE 8080
CMD [ "npm", "start" ]
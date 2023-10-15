FROM node:18-alpine

WORKDIR /src/app

ENV PORT=8080

COPY ./package*.json ./
RUN npm install
COPY ./server.js ./

CMD ["npm","start"]

EXPOSE 8080

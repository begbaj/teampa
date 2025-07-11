FROM node:24-alpine

RUN apk add --no-cache postgresql-client

WORKDIR /app

COPY package*.json ./
RUN npm install

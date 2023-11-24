FROM node:18-alpine as base
WORKDIR /usr/app
COPY ./app/health/package.json ./
COPY ./app/health/src ./src
RUN npm install
ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 3001
FROM node:18-alpine as base
WORKDIR /usr/app
COPY ./apps/app1/package.json ./
COPY ./apps/app1/src ./src
RUN npm install
ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 3001
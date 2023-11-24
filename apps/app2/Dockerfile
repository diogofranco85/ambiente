FROM node:18-alpine as base
WORKDIR /usr/app
COPY ./apps/app2/package.json ./
COPY ./apps/app2/src ./src
RUN npm install
ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 3001
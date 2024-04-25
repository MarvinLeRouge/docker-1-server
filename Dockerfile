# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY ./package.json .
COPY . .
RUN yarn install --production
EXPOSE 1993
CMD ["node", "app.js"]

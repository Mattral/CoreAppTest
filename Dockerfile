# base node image
FROM node:18-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package*.json ./

RUN ls -la

RUN cat package.json

RUN npm ci --omit=dev --legacy-peer-deps

ENV PORT="3000"
ENV NODE_ENV="production"

COPY ./apps/core-app/build ./build
COPY ./apps/core-app/public ./public

RUN npm pkg set 'type'='module'

EXPOSE 3000

CMD [ "npm", "run", "start" ]

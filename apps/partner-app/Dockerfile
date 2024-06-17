# base node image
FROM node:18-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package*.json ./

RUN npm ci --omit=dev --legacy-peer-deps

ENV PORT="4000"
ENV NODE_ENV="production"

COPY ./apps/partner-app/build ./build
COPY ./apps/partner-app/public ./public

RUN npm pkg set 'type'='module'

EXPOSE 4000

CMD [ "sh", "-c", "PORT=4000 npm run start" ]

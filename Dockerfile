# syntax=docker/dockerfile:1

FROM node:16.13.0

# Create app directory
WORKDIR /home/co-engine/res-server

# Install app dependencies
COPY package*.json ./
RUN npm config set unsafe-perm true && npm i && npm i -g typescript

# Bundle app source
COPY . .

# build
RUN npm run build:prod

# log
RUN mkdir -p /var/logs/co-engine

# ENV PARAMS
ENV NODE_ENV sandbox
ENV INSTANCE 1
ENV PORT 8100

# PORT
EXPOSE $PORT

CMD [ "node", "dist/src/server.js" ]

# echo
RUN echo "server listening on " + $PORT + ", NODE_ENV is " + $NODE_ENV
RUN echo "Instance: " $INSTANCE


### Build image
# DOCKER_SCAN_SUGGEST=false docker build -t co-engine/res-server:0.1.0 .
### tag
# docker tag co-engine/res-server:0.1.0 https://registry.eeo-inc.com/co-engine/res-server:0.1.0
### push
# docker push https://registry.eeo-inc.com/co-engine/res-server:0.1.0
### Run image
# docker run -d -it -p 8100:8100 co-engine/res-server:0.1.0

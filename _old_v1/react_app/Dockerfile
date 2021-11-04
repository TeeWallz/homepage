#FROM ubuntu:20.04
#ARG DEBIAN_FRONTEND=noninteractive
#ENV TZ=Australia/Melbourne
#RUN apt-get update && apt-get install -y  npm git

FROM alpine
RUN apk add --update npm git

# LABEL about the custom image
LABEL maintainer="thomas.r.waller@gmail.com"
LABEL version="0.1"
LABEL description="This is custom Docker Image for monty."




# set work directory
WORKDIR /srv

# Get code
RUN mkdir /srv/app
COPY . /srv/app

WORKDIR /srv/app/react_app

RUN npm install npm -g
RUN npm install

ARG REACT_APP_REACT_PORT
ENV REACT_APP_REACT_PORT=$REACT_APP_REACT_PORT
ARG REACT_APP_DJANGO_PORT
ENV REACT_APP_DJANGO_PORT=$REACT_APP_DJANGO_PORT
ARG REACT_APP_HTTP_METHOD
ENV REACT_APP_HTTP_METHOD=$REACT_APP_HTTP_METHOD
ARG REACT_APP_VIRTUAL_HOST
ENV REACT_APP_VIRTUAL_HOST=$REACT_APP_VIRTUAL_HOST



RUN npm run build

## Expose Port for the Application
#EXPOSE 3001
#Download base image ubuntu 20.04
FROM alpine
# LABEL about the custom image
LABEL maintainer="thomas.r.waller@gmail.com"
LABEL version="0.1"
LABEL description="This is custom Docker Image for monty."

# set work directory
WORKDIR /srv

ENV TZ=Australia/Melbourne
#Prevents Python from writing pyc files to disc (equivalent to python -B option)
ENV PYTHONDONTWRITEBYTECODE 1
#Prevents Python from buffering stdout and stderr (equivalent to python -u option)
ENV PYTHONUNBUFFERED 1

#Update
RUN apk add --update  python3 py3-pip python3-dev uwsgi git mariadb-connector-c-dev gcc musl-dev build-base

RUN apk add --no-cache --virtual .build-deps  mariadb-dev   \
     && pip install cython mysqlclient \
     && apk del .build-deps musl-dev gcc

RUN ln -s /usr/bin/python3 /usr/bin/python

# add this and below command will run without cache
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
#RUN git clone https://ISTWOMP@bitbucket.org/ISTWOMP/django_nginx_docker_boilerplate.git /srv/app
RUN mkdir /srv/app
COPY . /srv/app

WORKDIR /srv/app
RUN pip install wheel
COPY requirements.txt /tmp/
RUN pip install --requirement /tmp/requirements.txt

## Expose Port for the Application
EXPOSE 8001
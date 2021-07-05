FROM tutum/nginx

RUN rm /etc/nginx/sites-enabled/default
COPY sites-enabled/ /etc/nginx/sites-enabled



## create the appropriate directories
#ENV HOME=/srv/monty_project/
#ENV APP_HOME=/srv/monty_project/app/
#RUN mkdir -p /srv/monty_project/app/monty_app/static
#WORKDIR $APP_HOME

EXPOSE 80
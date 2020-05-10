FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/web/nginx.conf /etc/nginx/nginx.conf.d

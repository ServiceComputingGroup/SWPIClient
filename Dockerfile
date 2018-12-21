FROM hub.c.163.com/library/nginx
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'echo init ok!!'

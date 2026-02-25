FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY assets/ ./
COPY *.html ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
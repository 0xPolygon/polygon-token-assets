FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY assets/ ./
COPY *.html ./
RUN rm -rf .git*  # Optional for cleaning up Git files

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
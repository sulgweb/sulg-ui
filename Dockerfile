# build stage
FROM node:14.7.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn config set registry https://registry.npm.taobao.org \
    && yarn
COPY . .
RUN yarn build

# nginx stage
FROM nginx:1.19-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk add bash \
    && apk add vim 
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

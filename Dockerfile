FROM node:alpine AS builder
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . . 

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
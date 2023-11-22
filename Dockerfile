FROM node:18.18.2-alpine3.18 AS builder
WORKDIR /tech-service-app
COPY ./package.json /tech-service-app
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.25.3
COPY --from=builder /tech-service-app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
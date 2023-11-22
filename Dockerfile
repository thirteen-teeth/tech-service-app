FROM node:18.18.2-alpine3.18

WORKDIR /tech-service-app

COPY ./package.json /tech-service-app
RUN npm install

COPY . .

CMD ["npm", "start"]
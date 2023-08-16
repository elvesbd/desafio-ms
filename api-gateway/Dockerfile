FROM node:18

WORKDIR /usr/src/api-gateway

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

FROM node:18

WORKDIR /usr/src/ms-users

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]

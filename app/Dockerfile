FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .


COPY public ./public

EXPOSE 3000
CMD [ "node", "index.js" ]
FROM node:18

WORKDIR /mnt/src/app

copy package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm run","start:docker"]


FROM node:18

RUN npm i -g pnpm

WORKDIR /mnt/src/app

copy package.json ./

RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm","start:docker"]


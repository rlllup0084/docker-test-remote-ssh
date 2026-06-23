# api/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Using tsx for a quick development spin-up
CMD ["npx", "tsx", "src/index.ts"]
FROM node:18-bullseye as bot
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm@8.12.0 rollup pm2
RUN pnpm install
RUN chown -R 0:0 /app
RUN chmod 777 -R /app
USER root
COPY . .
CMD ["pnpm", "start"]
FROM node:18-slim
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn", "preview"]

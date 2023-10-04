FROM node:18-alpine

WORKDIR /app

COPY . .

# RUN yarn --immutable --only=production <------- check if that works
RUN yarn --only=production

RUN yarn build

# EXPOSE 3000

CMD ["yarn", "start"]

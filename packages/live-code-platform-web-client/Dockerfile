FROM node:18-alpine

WORKDIR /app

COPY . .

# RUN yarn --immutable --only=production <------- check if that works
RUN yarn --only=production

ARG NEXT_PUBLIC_EXTERNAL_SERVER_HOST
ENV NEXT_PUBLIC_EXTERNAL_SERVER_HOST=$NEXT_PUBLIC_EXTERNAL_SERVER_HOST

RUN yarn build

# EXPOSE 3000

CMD ["yarn", "start"]

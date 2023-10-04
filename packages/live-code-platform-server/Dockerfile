FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn --only=production

EXPOSE 8080

# Command to start your application
CMD ["yarn", "start"]

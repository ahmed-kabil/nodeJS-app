FROM node:alpine3.22
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=8040
CMD ["node","app.js"]
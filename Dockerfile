FROM node:16.15.0
ENV NODE_ENV=production
ENV VARIABLE /.env
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm install tsc
RUN npm install typescript -g
RUN npm install @types/node --save-dev
RUN npm install dotenv
COPY . .
RUN npm run compile
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm start", "dist/app.js"]

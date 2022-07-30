FROM node:16.15.0
ENV NODE_ENV=production
ENV VARIABLE /.env
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install
RUN npm install tsc
RUN npm install npx
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "dist/app.js"]

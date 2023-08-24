FROM node:alpine
WORKDIR /usr/app
RUN npm install --global pm2
COPY ./package*.json ./
RUN npm install sharp --omit=dev
ARG CACHEBUST=1
RUN npm install --omit=dev
RUN npm i --save-dev @types/nprogress
COPY . .
RUN npm run build
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]

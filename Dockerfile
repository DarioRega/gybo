FROM node:12-alpine

WORKDIR /code

COPY ./package.json /code
COPY ./package-lock.json /code
RUN npm install

COPY . /code

RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

# start the app
CMD [ "npm", "start" ]

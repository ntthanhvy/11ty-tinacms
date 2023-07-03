FROM node:18

WORKDIR /app

COPY ./ /app/

RUN npm install
RUN npm run build

ARG PORT

ENV PORT=$PORT

EXPOSE $PORT

CMD [ "npm run browsersync" ]
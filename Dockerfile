FROM kkarczmarczyk/node-yarn:latest

RUN mkdir -p /opt/app
COPY . /opt/app

WORKDIR /opt/app

RUN yarn install

EXPOSE 3000
CMD [ "yarn", "serve:prod" ]

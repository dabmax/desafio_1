FROM node:10.23.0

LABEL MAINTAINER="<Diego Barros>" E-MAIL="<dab_max@hotmail.com>"

WORKDIR /usr/src/app

RUN npm install \
	&& npm i express pg \
	&& npm init -y \
	&& npm i cors dotenv express express-promise-router pg \
	&& npm i --save-dev husky nodemon \
	&& npm install -g nodemon

COPY api-postgres /usr/src/app

EXPOSE 3000

CMD [ "nodemon", "npm", "run"]

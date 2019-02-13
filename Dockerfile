FROM node:10

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY main ./
COPY *.js ./

RUN npm install

RUN chmod +x ./main

ENTRYPOINT [ "./main" ]

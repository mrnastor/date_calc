FROM node:10

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY date_calc ./
COPY *.js ./

RUN npm install

ENTRYPOINT [ "./date_calc" ]

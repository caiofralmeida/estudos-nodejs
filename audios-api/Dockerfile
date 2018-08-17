FROM node:10-alpine

LABEL maintainer Caio Almeida

RUN mkdir -p /app

WORKDIR /app

RUN apk --update add curl tzdata \
    && rm -rf /var/cache/apk/* \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
    && echo "America/Sao_Paulo" | tee /etc/TZ /etc/timezone \
    && apk del tzdata

COPY . .

RUN yarn

EXPOSE 5001

#HEALTHCHECK CMD curl --fail http://localhost:5000/pja/_healthcheck || exit 1

CMD ["node", "./src/index.js"]

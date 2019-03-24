# stage 0
FROM composer as builder-php

WORKDIR /app

COPY composer.json composer.lock /app/

RUN composer install \
        --ignore-platform-reqs \
        --no-ansi \
        --no-dev \
        --no-autoloader \
        --no-interaction \
        --no-scripts \
    && composer dump-autoload \
        --optimize \
        --no-dev \
        --classmap-authoritative

# stage 1
FROM node as builder-node

WORKDIR /app

COPY package.json \
    package-lock.json \
    webpack.config.prod.js \
    /app/

RUN npm i

COPY src /app/src/

RUN npm run build

# stage 2
FROM php:7-fpm-alpine

LABEL maintainer="cyril.garsaud@gmail.com"

WORKDIR /app

COPY ./index.php ./view.html /app/

COPY --from=builder-php \
    /app/vendor \
    /app/vendor

COPY --from=builder-node \
    /app/dist \
    /app/dist

CMD ["php", "-S", "0.0.0.0:80"]

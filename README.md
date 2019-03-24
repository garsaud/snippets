# Dev environment

```sh
docker build -t snippet . \
    && docker run --rm -it -p 80:80 \
        -v ${PWD}/database.sqlite:/app/database.sqlite \
        -v ${PWD}/dist/:/app/dist/ \
        -v ${PWD}/index.php:/app/index.php \
        -v ${PWD}/view.html:/app/view.html \
        snippet
```

# Prod environment

```sh
docker build -t snippet . \
    && docker run --name snippet -d -p 80:80 -v ${PWD}/database.sqlite:/app/database.sqlite snippet
```

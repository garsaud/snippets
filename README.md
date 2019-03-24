# Snippets

A practical way to keep manage your snippets in various programming languages.

![demo](https://user-images.githubusercontent.com/3667366/54887100-71ea9680-4e8f-11e9-9c24-f0ecd7bdbec0.gif)

## Prod environment

```sh
docker build -t snippet . \
    && docker run --name snippet -d -p 80:80 -v ${PWD}/database.sqlite:/app/database.sqlite snippet
```

## Dev environment

```sh
docker build -t snippet . \
    && docker run --rm -it -p 80:80 \
        -v ${PWD}/database.sqlite:/app/database.sqlite \
        -v ${PWD}/dist/:/app/dist/ \
        -v ${PWD}/index.php:/app/index.php \
        -v ${PWD}/view.html:/app/view.html \
        snippet
```

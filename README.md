# Snippets

A practical way to manage your snippets in various programming languages.

<p align="center">
    <img src="https://user-images.githubusercontent.com/3667366/54887100-71ea9680-4e8f-11e9-9c24-f0ecd7bdbec0.gif">
</p>

## Compiling and running

```sh
touch database.sqlite
docker build -t snippets .
docker run --name snippets -d -p 80:80 -v ${PWD}/database.sqlite:/app/database.sqlite snippets
```

## Dev mode

```sh
docker build -t snippets . \
    && docker run --rm -it -p 80:80 \
        -v ${PWD}/database.sqlite:/app/database.sqlite \
        -v ${PWD}/dist/:/app/dist/ \
        -v ${PWD}/index.php:/app/index.php \
        -v ${PWD}/view.html:/app/view.html \
        snippets
```

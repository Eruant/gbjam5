#!/usr/bin/env bash

MOD=./node_modules/.bin

case $1 in
  build)
    mkdir -p dist
    $MOD/pug < src/index.pug > dist/index.html
    $MOD/browserify src/app.js > dist/x.js
    cp src/*.png dist
    ;;
  watch)
    $MOD/nodemon -e pug --ignore dist -x "$MOD/pug < src/index.pug > dist/index.html" & \
      $MOD/nodemon -e js --ignore dist -x "$MOD/browserify src/app.js > dist/x.js"
    ;;
  *)
    echo "usage: build [build|watch]"
esac

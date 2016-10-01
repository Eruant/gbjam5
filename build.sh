#!/usr/bin/env bash

MOD=./node_modules/.bin

case $1 in
  build)
    mkdir -p dist
    $MOD/pug < src/index.pug > dist/index.html
    $MOD/rollup -c
    cp src/*.png dist
    ;;
  watch)
    $MOD/nodemon -e pug --ignore temp -x "$MOD/pug < src/index.pug > dist/index.html" & \
      $MOD/nodemon -e js --ignore temp -x "$MOD/rollup -c"
    ;;
  *)
    echo "usage: build [build|watch]"
esac

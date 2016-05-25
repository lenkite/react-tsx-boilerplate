#!/bin/bash

npm install -g typescript typings webpack webpack-dev-server ts-loader source-map-loader react react-hot-loader@3.0.0-beta.1
npm link webpack-dev-server #links local to global
npm link webpack
npm link typescript
npm link ts-loader
npm link source-map-loader
npm link react-hot-loader
typings install --global --save dt~react
typings install --global --save dt~react-dom
npm install
#!/bin/bash
set -e
set -x

project_path=$(pwd)
name=$PROJECT_NAME
dir=$(dirname "${0}")

alias react-native="$(pwd)/node_modules/.bin/react-native"

#yarn add react-native-square-in-app-payments
yarn add @react-native-community/art react-native-barcode-builder
npx react-native link @react-native-community/art
This is an [IonicFramework](http://ionicframework.com/docs/) based mobile app for reading articles from https://dev.to/ using their API.

## Getting the app
If you simply want to use the app you can go to Google Play Store: https://play.google.com/store/apps/details?id=io.ecompilot.devcommunity

iOs version will be published sooner or later, no schedule yet.


## Compiling the app yourself
If you wish to compile and run it on your computer you need to clone this repository and run following commands:

```bash
cd dev_to
npm install -g ionic cordova
npm install
ionic cordova run android
```

You will need android virtual device created or real device connected to computer via USB cable.

## Running in browser
To run in app in browser:

```bash
ionic serve
```

## Current functionality
* Getting list of latest articles
* Reading the article
* Sharing article via standard android sharing mechanism
* Opening article page on dev.to site.

## Plans/Roadmap
* Prepare app and publish it to iOS App Store
* Small redesign to use screen space more efficiently (remove paddings/margins), make font larger, add some CSS for better code listings appearance
* Load comments for articles
* Add offline reading functionality
* Notifications about new articles even when app is in background or not running (don't know yet if it is possible with Ionic yet).

## Licence
MIT

##Code of Conduct
This project abides by the dev.to [code of conduct](https://dev.to/code-of-conduct)

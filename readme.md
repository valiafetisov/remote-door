## General info

Small, but practical application with single purpose: to open the door #133 in the middle of Berlin. Connects ESP8266-based relay with nice drawing of the door, that you can swipe and physically open the door. Live app with real-time updates here [133.conformity.io](http://133.conformity.io)


## Quick start

Project consist of two parts: ESP8266 hardware and a meteor.js-based application.

__To run the app:__
1. Copy `configurations/development/settings-example.json` into `configurations/development/settings.json` and edit it. (you can use any of [publically-accessible mqtt brokers](https://github.com/mqtt/mqtt.github.io/wiki/public_brokers) or install your own, like [mosquitto](https://mosquitto.org/download/))
2. Run `npm start` in terminal inside of the project ([install meteor](https://www.meteor.com/install) if you don't have it)
3. Open [`localhost:5500`](http://localhost:5500) in your browser

__To program ESP8266 module:__
1. Connect module to your serial adapter
2. Add ESP support to Arduino IDE and [PubSubClient](https://github.com/knolleary/pubsubclient) library
3. Open up [the program](ESP8266-code/ESP8266-code.ino) in Arduino IDE
4. Build and upload


## Description




## Needed parts

| Part               | Quantity | Price    |
|--------------------|:--------:|---------:|
| ESP8266            | 1        |       $3 |
| 3.3v relay module  | 1        |       $5 |
| 3.3v power supply  | 1        |       $5 |
|                    |          |          |
| __Summary__        |          |      $13 |

## General info

Small, but practical application with single purpose: to open the door #133 in the middle of Berlin. Connects ESP8266-based relay with nice drawing of the door that you can swipe and physically open the door. Live app with real-time updates: [133.conformity.io](http://133.conformity.io).


## Setup

Project consist of two parts: ESP-01 module + relay and a meteor.js-based application. Those two parts connected with each other via MQTT broker.

__To run the app:__

1. Copy `configurations/development/settings-example.json` into `configurations/development/settings.json` and edit it. (you can use any of [publically-accessible mqtt brokers](https://github.com/mqtt/mqtt.github.io/wiki/public_brokers) or install your own, like [mosquitto](https://mosquitto.org/download/))
2. Run `npm start` in terminal inside of the project ([install meteor](https://www.meteor.com/install) if you don't have it)
3. Open [`localhost:5500`](http://localhost:5500) in your browser

__To flash ESP8266 module:__

1. Add ESP support to Arduino IDE and [PubSubClient](https://github.com/knolleary/pubsubclient) library
2. Copy [`configuration-example.h`](ESP8266-code/configuration-example.h) to `configuration.h` and fill all needed information about WIFI access point and mqtt server
3. Open up [the program](ESP8266-code/ESP8266-code.ino) in Arduino IDE
4. Connect module to your serial adapter, build and upload


## Parts list

| Part               | Quantity    | Price       |
|--------------------|:-----------:|------------:|
| ESP-01             | 1           |        $2.5 |
| 3.3v relay module  | 1           |          $5 |
| 3.3v power supply  | 1           |          $8 |
|                    | __Summary__ |       $15.5 |

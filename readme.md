# Remote door

Small full stack application with a single purpose: to open entrance door hooked up to the internet-connected relay. The app intends to design cartoon-like interface of the door without sacrificing usability. It is a drawing of a door, that user can swipe and open the real door. Live example (actual door is somewhere in Berlin) can be found here: [https://133.conformity.io](https://133.conformity.io).

One of the challenges was to prevent user confusion by clear communication of the door states without use of words. The door have `loading`, `open` or `offline` states represented graphically:

  <img src="https://cdn.rawgit.com/valiafetisov/remote-door/master/public/showcase/ui-connecting.svg" width="280" height="280"><img src="https://cdn.rawgit.com/valiafetisov/remote-door/master/public/showcase/ui-open-close.svg" width="280" height="280"><img src="https://cdn.rawgit.com/valiafetisov/remote-door/master/public/showcase/ui-error.svg" width="280" height="280">

## Code Structure

The project consist of two main parts, connected through MQTT brocker

  - [`firmware`](./firmware) – ESP-based internet-connected relay
  - [`src`](./src) – Node.js + React.js full stack web application

## Hardware

The project is designed to run on a $5 Sonoff Basic module, that should be modified and reflashed with the provided firmware.

## How to make your own door

1. Install MQTT-brocker or register on a [public one](https://github.com/mqtt/mqtt.github.io/wiki/public_brokers)
2. Setup hardware (Sonoff or any other ESP-based board would work)
    1. Add ESP support to Arduino IDE and [PubSubClient](https://github.com/knolleary/pubsubclient) library
    2. Copy [`configuration-example.h`](firmware/configuration-example.h) to `configuration.h` and fill information about wifi and mqtt server
    3. Open up [firmware](firmware/firmware.ino) in the Arduino IDE
    4. Connect module to your serial adapter, build and upload
    5. Test the mqtt connection by listening on defined `outTopic` and sending letter `o` to the `inTopic`
    6. If you using Sonoff Basic module, be carefull with the main power! You will need to modify it's PCB and disconnect the relay from the mains, in order to drive low-power door switch
    7. Connect NORMALLY OPEN relay to the ESP and to the switch contacts that opens up the door
3. Setup dev server
    1. Download the code to your local environment
    2. Copy `configuration-example.json` to `configuration.json` and edit it
    3. Run `npm i && npm run dev` in terminal inside root of the project (install modern verion of [`node.js`](https://nodejs.org/en/download/package-manager/) if you don't have it)
    3. Open [`localhost:7001`](http://localhost:7001) in your browser
4. Make a new door component
    1. Draw your door using a vector graphics editor (Illustrator would be ok), try to keep door in the middle
    2. Separate door and it's frame into different layers/groups
    3. Export drawing to SVG
    4. Copy any existing [door component](./src/client/doors) and replace SVG code inside. Optionally, embedded css code can be moved into a separate file
    5. Find door group inside CSS and apply `doorTransformStyle` and `doorAnimationClass` just like in the examples
    6. Add newly created component to the list in [`DoorSelector.js`](./src/client/DoorSelector.js)
    7. Edit `componentName` property inside `configuration.json` to replace it with a newly created component name
    8. Debug problems [`localhost:7001`](http://localhost:7001) using browser console
5. Deploy the project. [`pm2.config.js`](./pm2.config.js) can be used to start keep server-side code running

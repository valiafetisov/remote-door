/*

  It connects to an MQTT server and waits for the 'o' message
  which means "open the door".

  After that it would open the door for the 4 seconds and send
  notifications about door status on the topic "/door/status"
  (can be "open", "closed").

  Topic "/device/status" (can be "online" or "offline") uses
  Last Will and Testament configuration.

*/

#include <ESP8266WiFi.h>
#include <PubSubClient.h>

#include "configuration.h"
const char* outStatus = "/device/status";
const char* outTopic = "/door/status";
const char* inTopic = "/door/command";

int relay_pin = 0;
bool relayState = LOW;

WiFiClient espClient;
PubSubClient client(espClient);
long lastMsg = 0;
char msg[50];
int value = 0;

void setup_wifi() {
  delay(10);

  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifiSSID);

  WiFi.begin(wifiSSID, wifiPassword);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  digitalWrite(13, LOW);
  delay(500);
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
  digitalWrite(13, HIGH);
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  // Open the door
  if ((char)payload[0] == 'o') {
    Serial.println("opening the door for 4 seconds");
    digitalWrite(relay_pin, LOW);
    client.publish(outTopic, "open");
    delay(4000);
    digitalWrite(relay_pin, HIGH);
    client.publish(outTopic, "closed");
    Serial.println("door closed");
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect(mqttClientName, mqttUser, mqttPassword, outStatus, 2, 1, "offline")) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish(outStatus, "online", true);
      // ... and resubscribe
      client.subscribe(inTopic);
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void setup() {
  // Initialize the relay pin as an output
  pinMode(relay_pin, OUTPUT);
  digitalWrite(relay_pin, HIGH);

  // Blink to indicate setup
  digitalWrite(13, LOW);
  delay(500);
  digitalWrite(13, HIGH);
  delay(500);

  Serial.begin(115200);

  // Connect to wifi
  setup_wifi();
  client.setServer(mqttServer, 1883);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
}
